import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '/src/Modules/Team/shared/utils/api';
import toast from '/src/Modules/Team/shared/utils/toast';
import { getStoredAuthToken, storeAuthToken } from '/src/Modules/Team/shared/utils/authToken';
import { PageLoader } from '/src/Modules/Team/shared/components';

const Authenticate = () => {
  const history = useNavigate();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history('/');
      } catch (error) {
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
