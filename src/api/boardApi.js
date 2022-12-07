import axiosClient from './axiosClient'

const boardApi = {
  create: (params) => axiosClient.post('board',params),
  getAll: () => axiosClient.get('board'),
  updatePositoin: (params) => axiosClient.put('board', params),
  getOne: (id) => axiosClient.get(`board/${id}`),
  delete: (id) => axiosClient.delete(`board/${id}`),
  update: (id, params) => axiosClient.put(`board/${id}`, params),
  getFavourites: () => axiosClient.get('board/favourites'),
  updateFavouritePosition: (params) => axiosClient.put('board/favourites', params)
}

export default boardApi