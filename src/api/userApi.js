import axiosClient from './axiosClient'

const userApi = {
  getOne: () => axiosClient.get('users/profile'),
  update: (params) => axiosClient.put(`users/update-profile`, params),
}

export default userApi