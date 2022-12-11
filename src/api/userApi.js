import axiosClient from './axiosClient'

const userApi = {
  getOne: () => axiosClient.get('users/profile'),
  update: (params) => axiosClient.put(`users/update-profile`, params),
  updatePW: (params) => axiosClient.put(`users/update-password`, params),
}

export default userApi