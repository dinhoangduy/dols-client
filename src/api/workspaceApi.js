import axiosClient from './axiosClient'

const workspaceApi = {
  getAll: () => axiosClient.get(`/workspace`),
  update: (id,params) => axiosClient.put(`/workspace/${id}`,params),
}

export default workspaceApi