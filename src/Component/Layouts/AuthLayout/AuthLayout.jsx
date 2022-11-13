import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import authUtil from '../../../utils/authUtils';

import Loading from '../../Common/Loading';
// import Header from '../../Common/Header/Header';

import './styles.scss';

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //     const verifyToken = async () => {
  //         const user = await authUtil.isAuthenticated();
  //         if (user) {
  //             console.log(user);
  //             navigate("/:workspaceID");
  //         } else {
  //             setLoading(false);
  //         }
  //     };
  //     verifyToken();
  // }, [location]);

  return (
    <div className="container">
      <div className="auth-layout">
        {/* <Header /> */}
        {/* {isLoading ? <Loading></Loading> : <Outlet />} */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
