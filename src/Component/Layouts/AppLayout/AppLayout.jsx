import React, { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import authUtil from "../../../utils/authUtils";
import Loading from "../../Common/Loading";

const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //   const verifyToken = async () => {
    //     const user = await authUtil.isAuthenticated();
    //     if( user) {
    //       console.log(user);
    //       setLoading(false);
    //     }
    //     else {
    //       navigate('/login');
    //     }
    //    }
    //    verifyToken();

    // }, [location])

    return (
        <div className="app-layout">
            {/* {isLoading ? <Loading /> : <Outlet />} */}
            <Outlet/>
        </div>
    );
};

export default AppLayout;
