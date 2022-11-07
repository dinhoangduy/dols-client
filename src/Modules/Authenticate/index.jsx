import React from "react";
import { useLocation } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Home from './pages/Home/Home';

const Authenticate = () => {
    const location = useLocation();

    const pageList = {
        '/login': {
            component: <Login/>
        },
        '/sign-up': {
            component: <Signup/>
        },
        '/forgot-password': {
            component: <Forgot/>
        },
        '/': {
            component: <Home/>
        },
    }

    const renderAuthenticatedPage = () => {
        return pageList[location.pathname].component;
    }

    return renderAuthenticatedPage();
};

export default Authenticate;
