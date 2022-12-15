import axiosClient from './axiosClient'

const taskApi = {
  create: (params) => axiosClient.post('tasks',params),
  getAll: () => axiosClient.get('tasks'),
  updatePositoin: (params) => axiosClient.put('tasks', params),
  getOne: (id) => axiosClient.get(`tasks/${id}`),
  delete: (id) => axiosClient.delete(`tasks/${id}`),
  update: (id, params) => axiosClient.put(`tasks/${id}`, params),
  getFavourites: () => axiosClient.get('tasks/favourites'),
  updateFavouritePosition: (params) => axiosClient.put('tasks/favourites', params),
  updateTaskOfData: (params) => axiosClient.post('tasks/update-task-of-data', params),
  updateTaskDeadline: (params) => axiosClient.post('tasks/make-deadline', params)
}

export default taskApi