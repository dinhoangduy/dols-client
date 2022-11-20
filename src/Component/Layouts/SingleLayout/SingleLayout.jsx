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
    //         const workspace = await authUtil.isAuthenticated();
    //         if (workspace) {
    //             console.log(workspace);
    //             navigate(`/single/${workspace[0]?.id}`);
    //         } else {
    //             location.pathname === "/"
    //                 ? navigate("/home")
    //                 : setLoading(false);
    //         }
    //     };

    //     verifyToken();
    // }, [location]);

    return (
            <div className="app-layout">
                {/* {isLoading ? <Loading></Loading> : <Outlet />} */}
                <Outlet/>
            </div>
    );
};

export default SingleLayout;
