import axiosClient from './axiosClient';

const authApi = {
  signup: (params) => axiosClient.post('clients/register', params),
  login: (params) => axiosClient.post('clients/login', params),
  sendMail: (params) => axiosClient.post('clients/require-register', params),
  active: (params) => axiosClient.post('clients/active', params),
  verifyToken: () => axiosClient.get('workspace'),
};

export default authApi;
