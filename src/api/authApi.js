import axiosClient from './axiosClient';

const authApi = {
  signup: (params) => axiosClient.post('clients/register', params),
  signUpWithGoogle: (params) =>
    axiosClient.post('clients/using-with-gg', params),
  login: (params) => axiosClient.post('clients/login', params),
  sendMail: (params) => axiosClient.post('clients/require-register', params),
  resendMail: (params) => axiosClient.post('clients/resend-activekey', params),
  active: (params) => axiosClient.post('clients/active', params),
  verifyToken: () => axiosClient.get('workspace'),
};

export default authApi;
