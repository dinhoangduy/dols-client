import axiosClient from './axiosClient'

const userApi = {
  getOne: () => axiosClient.get('users/profile'),
  update: (params) => axiosClient.put(`users/update-profile`, params),
  updatePW: (params) => axiosClient.put(`users/update-password`, params),
  updatePayStatus: (params) => axiosClient.post(`clients/update-account`,params),
  payment: (params) => axiosClient.post(`payment`,params)
}

export default userApi