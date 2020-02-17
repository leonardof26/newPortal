import api from '../api'

export const auth = {
  getToken: user => {
    return api.post('Foursys.AuthProvider/api/Auth/Token', user)
  },
  refreshToken: payload => {
    return api.post('Foursys.AuthProvider/api/Auth/RefreshToken', payload)
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

export const roles = {
  getRoles: () => {
    return api.get('Foursys.API/api/Cargo')
  },
  addRole: role => {
    return api.post('Foursys.API/api/Cargo', role)
  },
  updateRole: role => {
    return api.put('Foursys.API/api/Cargo', role)
  },
}
