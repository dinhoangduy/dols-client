import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import authUtil from "../../../utils/authUtils";

import Loading from "../../Common/Loading";

import "./styles.scss";

const SingleLayout = () => {
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
                {/* {isLoading ? <Loading></Loading> : <Outlet />} */}
                <Outlet/>
            </div>
        </div>
    );
};

export default SingleLayout;
