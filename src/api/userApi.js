import axiosClient from './axiosClient'

const userApi = {
  getOne: () => axiosClient.get('users/profile'),
  update: (params) => axiosClient.put(`users/update-profile`, params),
  updatePW: (params) => axiosClient.put(`users/update-password`, params),
  updatePayStatus: (params) => axiosClient.post(`clients/upgrade`,params),
  payment: (params) => axiosClient.post(`payment`,params)
}

export default userApi