import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'portalFoursys',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReducers
}
