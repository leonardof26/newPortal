import querystring from 'querystring'
import api from './index'

const authBaseURL = 'Portal.AuthProvider'
const apiBaseURL = 'Portal.API'

export const projects = {
  getTechs: proj => {
    return api.get(`${apiBaseURL}/api/Tecnologia/Projeto/${proj}`)
  },
}

export const pricing = {
  getPrincingList: payload => {
    const string = querystring.stringify(payload)

    return api.get(
      `${apiBaseURL}/api/Precificacao${string ? `?${string}` : ''}`
    )
  },
  getPrincingStatus: () => {
    return api.get(`${apiBaseURL}/api/Status/Precificacao`)
  },
  getProjectDetails: proj => {
    return api.get(`${apiBaseURL}/api/Precificacao/Proposta/${proj}`)
  },
  getPrincingDetails: pric => {
    return api.get(`${apiBaseURL}/api/Precificacao/${pric}`)
  },
  getRevenueData: pric => {
    return api.get(`${apiBaseURL}/api/Precificacao/Receita/${pric}`)
  },
  getCostData: pric => {
    return api.get(`${apiBaseURL}/api/Precificacao/Custo/${pric}`)
  },
  getExpensesData: pric => {
    return api.get(`${apiBaseURL}/api/Precificacao/Despesa/${pric}`)
  },
  getMetrics: () => {
    return api.get(`${apiBaseURL}/api/Metrica`)
  },
  getDescountLevels: () => {
    return api.get(`${apiBaseURL}/api/NivelDesconto`)
  },
  savePrecDetails: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao`, payload)
  },
  saveProjDetails: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao/Proposta`, payload)
  },
  saveRevenueData: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao/Receita`, payload)
  },
  saveCostData: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao/Custo`, payload)
  },
  saveExpensesData: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao/Despesa`, payload)
  },
  sendToApproval: payload => {
    return api.post(`${apiBaseURL}/api/Precificacao/Aprovacao`, payload)
  },
}

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
  getIsDateValid: date => {
    return api.get(`${apiBaseURL}/api/PermissaoHorasHistorico/${date}`)
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
