import { parseISO, isAfter } from 'date-fns'
import api from '../api'

import { store } from '../../store'

const token = {
  refreshToken: () => {
    return api.get('Foursys.API/api/Cliente').then(res => res.data)
  },
}

export const saleProfiles = {
  getClients: () => {
    return api.get('Foursys.API/api/Cliente')
  },
  getProfileList: client => {
    return api.get(`Foursys.API/api/PerfilVenda/GetByClient/${client}`)
  },
  addProfile: profile => {
    return api.post('Foursys.API/api/PerfilVenda', profile)
  },
  updateProfile: profile => {
    return api.put('Foursys.API/api/PerfilVenda', profile)
  },
}

export const teste = () => {
  console.log(store)
}

// const refreshToken = async token => {
//   const response = await token.refreshToken(token)
// }

// const checkTokenExpired = () => {
//   const tokenExpirationDate = localStorage.getItem('tokenExpirationDate')

//   if (isAfter(parseISO(tokenExpirationDate), new Date())) {
//   }
// }

// const callAPI = call => {
//   check
// }
