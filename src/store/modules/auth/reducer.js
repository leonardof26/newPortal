import produce from 'immer'

const INITIAL_STATE = {
  token: null,
  refreshToken: null,
  tokenExpirationDate: null,
  signed: false,
  loading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token
        draft.refreshToken = action.payload.refreshToken
        draft.tokenExpirationDate = action.payload.tokenExpirationDate
        draft.signed = true
        draft.loading = false
        break
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': {
        draft.token = null
        draft.refreshToken = null
        draft.tokenExpirationDate = null
        draft.signed = false
        break
      }
      default:
    }
  })
}
