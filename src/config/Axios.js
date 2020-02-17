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

api.interceptors.request.use(async config => {
  if (!config.url.includes('Token')) {
    await checkTokenExpired(config)
  }

  const { token } = store.getState().auth

  config.headers.Authorization = `Bearer ${token}`

  return config
})

// api.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response.status !== 401) {
//       return Promise.reject(error)
//     }
//   }
// )
