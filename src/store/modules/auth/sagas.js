import { takeLatest, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import jwt from 'jsonwebtoken'

import { signInSuccess, signFailure, signOutRequest } from './actions'

import api from '../../../services/api'
import history from '../../../services/history'

import { auth } from '../../../services/API/calls'

export function* signIn({ payload }) {
  try {
    const response = yield auth.getToken(payload)

    const { token, refreshToken } = response.data

    const [firstName, lastName] = jwt.decode(token).given_name.split(' ')

    const tokenExpirationDate = jwt.decode(token).exp

    const user = { firstName, lastName }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, refreshToken, tokenExpirationDate, user))

    history.push('/')
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  api.defaults.headers.Authorization = `Bearer ${token}`
}

export function signOut() {
  history.push('/#/')
}

export function* refreshLogin({ payload }) {
  try {
    const response = yield auth.refreshToken(payload)

    const { token, refreshToken } = response.data

    const [firstName, lastName] = jwt.decode(token).given_name.split(' ')

    const tokenExpirationDate = jwt.decode(token).exp

    const user = { firstName, lastName }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, refreshToken, tokenExpirationDate, user))
  } catch (error) {
    yield put(signOutRequest())
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/REFRESH_TOKEN', refreshLogin),
])
