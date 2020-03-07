import querystring from 'querystring'
import api from '../api'

const authBaseURL = 'Portal.AuthProvider'
const apiBaseURL = 'Portal.API'

export const activities = {
  getActivities: () => {
    return api.get(`${apiBaseURL}/api/Atividades`)
  },
}

export const monthlyHour = {
  getHours: (month, year) => {
    return api.get(`${apiBaseURL}/api/HorasUteis/${month}/${year}`)
  },
}

export const historyAppointment = {
  getResources: () => {
    return api.get(`${apiBaseURL}/api/Recurso/GetUsersWithAccess`)
  },
  getProjects: user => {
    return api.get(`${apiBaseURL}/api/Projeto/GetByRecurso/${user}`)
  },
  getHistoryHours: ({ user, month, year }) => {
    return api.get(`${apiBaseURL}/api/HorasHistorico/${user}/${month}/${year}`)
  },
  getLastUpdate: user => {
    return api.get(
      `${apiBaseURL}/api/HorasHistorico/GetUltimaAtualizacao/${user}`
    )
  },
  AddHours: payload => {
    return api.post(`${apiBaseURL}/api/HorasHistorico`, payload)
  },
  DeleteHours: payload => {
    const string = querystring.stringify(payload)
    return api.delete(`${apiBaseURL}/api/HorasHistorico?${string}`)
  },
}

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
