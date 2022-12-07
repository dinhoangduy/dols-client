import axiosClient from './axiosClient'

const userApi = {
  getOne: () => axiosClient.get('users/profile'),
  update: (id, params) => axiosClient.put(`board/${id}`, params),
}

export default userApi