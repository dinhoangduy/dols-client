import React from "react";
import userApi from "../../api/userApi";
import { Spin } from 'antd';
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const handleUpdatePaymentStatus = () => {
        try {
            const res = userApi.updatePayStatus();

            if (res) {
                navigate("/");
            }
            else{
                console.log(" Thanh toan loi")
            }
        } catch {}
    };

    return <>
        <Spin></Spin>
        <h2>Đang xử lí thanh toán, vui lòng không refresh!</h2>
    </>;
};

export default SuccessPage;
