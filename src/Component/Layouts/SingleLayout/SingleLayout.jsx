import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import authUtil from "../../../utils/authUtils";

import Loading from "../../Common/Loading";

import "./styles.scss";



const SingleLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token) navigate("/login")
        else {
            setLoading(false);
        }

    }, [location]);

    return (
            <div className="app-layout">
                <Outlet/>
            </div>
    );
};

export default SingleLayout;
