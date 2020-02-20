import querystring from 'querystring'
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

export const monthHours = {
  getHours: year => {
    return api.get(`Foursys.API/api/HorasUteis/${year}`)
  },
  addHours: payload => {
    return api.post(`Foursys.API/api/HorasUteis`, payload)
  },
}

export const technology = {
  getTechnologies: () => {
    return api.get(`Foursys.API/api/Tecnologia`)
  },
  addTechnology: tech => {
    return api.post(`Foursys.API/api/Tecnologia`, tech)
  },
  updateTechnology: payload => {
    return api.put(`Foursys.API/api/Tecnologia`, payload)
  },
  deleteTechnology: ({ cdTecnologia, dsTecnologia }) => {
    const string = querystring.stringify({ cdTecnologia, dsTecnologia })
    return api.delete(`Foursys.API/api/Tecnologia?${string}`)
  },
}
