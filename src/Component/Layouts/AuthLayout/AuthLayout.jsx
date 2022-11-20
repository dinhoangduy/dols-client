import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import authUtil from "../../../utils/authUtils";

import Loading from "../../Common/Loading";
import AuthenHeader from "../../Common/AuthenHeader";
import AuthenFooter from "../../Common/AuthenFooter";

import "./styles.scss";

const AuthLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const workspace = await authUtil.isAuthenticated();
            if (workspace) {
                console.log(workspace);
                navigate(`/single/${workspace[0]?.id}`);
            } else {
                location.pathname === "/"
                    ? navigate("/home")
                    : setLoading(false);
            }
        };

        verifyToken();
    }, [location]);

    return (
        <div className="container">
            <div className="auth-layout">
                {isLoading && <Loading></Loading>}
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
