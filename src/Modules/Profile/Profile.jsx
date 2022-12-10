import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import userApi from "../../api/userApi";

const Profile = () => {
    const location = useLocation();
    const [userData, setUserData] = useState()
    useEffect(() => {
        const fetchData=  async () => {
            let userData = await userApi.getOne()
            console.log(userData);
        }

        fetchData()
    },[location])
    return <div>Profile</div>;
};

export default Profile;
