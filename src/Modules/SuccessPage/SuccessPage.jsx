import { Button, Result, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import userApi from "../../api/userApi";
const App = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [extra, setExtra] = useState([
        <span>
            Server đang cập nhật dữ liệu cho bạn, vui lòng không refresh trang!
        </span>,
        <Spin />,
    ]);
    console.log(searchParams.get('paymentId'));

    useEffect(() => {
        handleUpgrade();
    }, []);

    const handleUpgrade = async () => {
        try {
            const res = await userApi.updatePayStatus();

            if (res) {
                setTimeout(() => {
                    setExtra([
                        <span>Dữ liệu đã được đồng bộ!</span>,
                        <Button type="primary" onClick={()=>  navigate('/')} key="back">
                            Về vùng làm việc
                        </Button>,
                    ]);
                }, 5000);
            }
        } catch (error) {}
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <Result
                status="success"
                title="Chúc mừng, bạn đã thanh toán  thành công!"
                subTitle={`Mã đơn hàng : ${searchParams.get('paymentId')} `}
                extra={extra}
            />
        </div>
    );
};
export default App;
