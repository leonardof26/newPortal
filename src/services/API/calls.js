import querystring from 'querystring'
import api from '../api'

const authBaseURL = 'Foursys.AuthProvider'
const apiBaseURL = 'Foursys.API'

export const auth = {
  getToken: user => {
    return api.post(`${authBaseURL}/api/Auth/Token`, user)
  },
  refreshToken: payload => {
    return api.post(`${authBaseURL}/api/Auth/RefreshToken`, payload)
  },
}

export const saleProfiles = {
  getClients: () => {
    return api.get(`${apiBaseURL}/api/Cliente`)
  },
  getProfileList: client => {
    return api.get(`${apiBaseURL}/api/PerfilVenda/GetByClient/${client}`)
  },
  addProfile: profile => {
    return api.post(`${apiBaseURL}/api/PerfilVenda`, profile)
  },
  updateProfile: profile => {
    return api.put(`${apiBaseURL}/api/PerfilVenda`, profile)
  },
}

export const roles = {
  getRoles: () => {
    return api.get(`${apiBaseURL}/api/Cargo`)
  },
  addRole: role => {
    return api.post(`${apiBaseURL}/api/Cargo`, role)
  },
  updateRole: role => {
    return api.put(`${apiBaseURL}/api/Cargo`, role)
  },
}

export const monthHours = {
  getHours: year => {
    return api.get(`${apiBaseURL}/api/HorasUteis/${year}`)
  },
  addHours: payload => {
    return api.post(`${apiBaseURL}/api/HorasUteis`, payload)
  },
}

export const technology = {
  getTechnologies: () => {
    return api.get(`${apiBaseURL}/api/Tecnologia`)
  },
  addTechnology: tech => {
    return api.post(`${apiBaseURL}/api/Tecnologia`, tech)
  },
  updateTechnology: payload => {
    return api.put(`${apiBaseURL}/api/Tecnologia`, payload)
  },
  deleteTechnology: ({ cdTecnologia, dsTecnologia }) => {
    const string = querystring.stringify({ cdTecnologia, dsTecnologia })
    return api.delete(`${apiBaseURL}/api/Tecnologia?${string}`)
  },
}
