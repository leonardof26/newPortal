import { isAfter } from 'date-fns'
import jwt from 'jsonwebtoken'
import api from '../services/API/index'
import { auth } from '../services/API/calls'

import { store } from '../store'
import {
  updateToken,
  signInSuccess,
  signOutRequest,
} from '../store/modules/auth/actions'

let isRefreshing = false
let subscribers = []
const beforeReq = false
const afterReq = false

function TokenExpired() {
  const { tokenExpirationDate } = store.getState().auth

  return isAfter(
    Math.round(new Date().getTime() / 1000),
    new Date(tokenExpirationDate)
  )
}

async function refreshLogin(payload) {
  const response = await auth.refreshToken(payload)

  const { token, refreshToken } = response.data

  api.defaults.headers.Authorization = `Bearer ${token}`

  const [firstName, lastName] = jwt.decode(token).given_name.split(' ')

  const tokenExpirationDate = jwt.decode(token).exp

  const user = { firstName, lastName }

  await store.dispatch(
    signInSuccess(token, refreshToken, tokenExpirationDate, user)
  )
}

function onRrefreshed(token) {
  console.log('cccc')
  subscribers.map(sub => sub(token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

// api.interceptors.request.use(async (config, ...rest) => {
//   console.log(subscribers)
//   console.log(config)
//   console.log(rest)
//   console.log(config.url.includes('Token'))
//   console.log(TokenExpired())
//   if (config.url.includes('Token') || !TokenExpired()) {
//     return config
//   }

//   if (!isRefreshing) {
//     isRefreshing = true

//     try {
//       const { token, refreshToken } = store.getState().auth
//       await refreshLogin({ token, refreshToken })
//     } catch (error) {
//       isRefreshing = false
//       subscribers = []
//       store.dispatch(signOutRequest())
//       return Promise.reject(error)
//     }

//     isRefreshing = false

//     const { token: newToken } = store.getState().auth

//     console.log('dddd')

//     onRrefreshed(newToken)

//     subscribers = []

//     config.headers.Authorization = `Bearer ${newToken}`
//     console.log('aaaa')
//     return config
//   }

//   const retryOriginalRequest = new Promise(resolve => {
//     addSubscriber(token => {
//       config.headers.Authorization = `Bearer ${token}`
//       resolve(api.request(config))
//     })
//   })
//   return retryOriginalRequest
// })

api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (!error.response) {
      return Promise.reject(error)
    }
    const {
      config,
      response: { status },
    } = error
    const originalRequest = config

    if (status !== 401 || config.url.indexOf('Auth/Token') !== -1) {
      return Promise.reject(error)
    }
    console.log(subscribers)

    if (!isRefreshing) {
      isRefreshing = true

      try {
        const { token, refreshToken } = store.getState().auth
        await refreshLogin({ token, refreshToken })
      } catch (_) {
        isRefreshing = false
        subscribers = []
        store.dispatch(signOutRequest())
        return Promise.reject(error)
      }

      isRefreshing = false

      const { token: newToken } = store.getState().auth

      onRrefreshed(newToken)

      subscribers = []

      originalRequest.headers.Authorization = `Bearer ${newToken}`
      return api.request(originalRequest)
    }

    const retryOriginalRequest = new Promise(resolve => {
      console.log(originalRequest)
      addSubscriber(token => {
        originalRequest.headers.Authorization = `Bearer ${token}`
        resolve(api.request(originalRequest))
      })
    })
    return retryOriginalRequest
  }
)
