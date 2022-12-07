import axiosClient from './axiosClient'

const dataApi = {
  create: (params) => axiosClient.post('datas',params),
  getAll: () => axiosClient.get('datas'),
  updatePositoin: (params) => axiosClient.put('datas', params),
  getOne: (id) => axiosClient.get(`datas/${id}`),
  delete: (id) => axiosClient.delete(`datas/${id}`),
  update: (id, params) => axiosClient.put(`datas/${id}`, params),
  getFavourites: () => axiosClient.get('datas/favourites'),
  updateFavouritePosition: (params) => axiosClient.put('board/favourites', params)
}

export default dataApi