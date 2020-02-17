import React from 'react'

import './config/ReactotronConfig'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import history from './services/history'
import './config/Axios'

import { store, persistor } from './store'

import GlobalStyle from './styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
