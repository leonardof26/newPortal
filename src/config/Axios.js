import { isAfter } from 'date-fns'
import jwt from 'jsonwebtoken'
import api from '../services/api'
import { auth } from '../services/API/calls'

import { store } from '../store'
import {
  updateToken,
  signInSuccess,
  signOutRequest,
} from '../store/modules/auth/actions'

let isRefreshing = false
let subscribers = []

async function checkTokenExpired() {
  const { tokenExpirationDate } = store.getState().auth

  if (
    isAfter(
      Math.round(new Date().getTime() / 1000),
      new Date(tokenExpirationDate)
    )
  ) {
    const { token, refreshToken } = store.getState().auth
    await refreshLogin({ token, refreshToken })
  }
}

async function refreshLogin(payload) {
  try {
    const response = await auth.refreshToken(payload)

    const { token, refreshToken } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    const [firstName, lastName] = jwt.decode(token).given_name.split(' ')

    const tokenExpirationDate = jwt.decode(token).exp

    const user = { firstName, lastName }

    await store.dispatch(
      signInSuccess(token, refreshToken, tokenExpirationDate, user)
    )
  } catch (error) {
    await store.dispatch(signOutRequest())
  }
}

function onRrefreshed(token) {
  subscribers.map(sub => sub(token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

// api.interceptors.request.use(async config => {
//   if (!config.url.includes('Token')) {
//     await checkTokenExpired(config)
//   }

//   const { token } = store.getState().auth

//   config.headers.Authorization = `Bearer ${token}`

//   return config
// })

api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const {
      config,
      response: { status },
    } = error
    const originalRequest = config

    if (status !== 401) {
      return Promise.reject(error)
    }

    if (!isRefreshing) {
      isRefreshing = true

      const { token, refreshToken } = store.getState().auth
      await refreshLogin({ token, refreshToken })

      const { token: newToken } = store.getState().auth

      isRefreshing = false

      onRrefreshed(newToken)

      subscribers = []

      originalRequest.headers.Authorization = `Bearer ${newToken}`
      return api.request(originalRequest)
    }

    const retryOriginalRequest = new Promise(resolve => {
      addSubscriber(token => {
        originalRequest.headers.Authorization = `Bearer ${token}`
        resolve(api.request(originalRequest))
      })
    })
    return retryOriginalRequest

    // config.headers.Authorization = `Bearer ${newToken}`

    return api.request(originalRequest)
  }
)
