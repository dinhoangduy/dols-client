import axiosClient from './axiosClient'

const workspaceApi = {
  getAll: () => axiosClient.get(`/workspace`),
}

export default workspaceApi