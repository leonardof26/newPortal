import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { signInSuccess, signFailure } from './actions'

import api from '../../../services/api'
import history from '../../../services/history'

export function* signIn({ payload }) {
  const userLogin = payload.user

  try {
    const response = yield call(
      api.post,
      'Foursys.AuthProvider/api/Auth/Token',
      payload
    )

    const { token, firstName, lastName } = response.data

    const user = { firstName, lastName, userLogin }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))

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
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
])
