export function signInRequest({ user, password }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { user, password },
  }
}

export function signInSuccess(token, refreshToken, tokenExpirationDate, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, refreshToken, tokenExpirationDate, user },
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
}

export function updateToken(token, refreshToken) {
  return {
    type: '@auth/REFRESH_TOKEN',
    payload: { token, refreshToken },
  }
}

export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT',
  }
}
