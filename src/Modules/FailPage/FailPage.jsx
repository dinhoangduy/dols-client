import { buttonBaseClasses } from "@mui/material";
import { Button, Result, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
const App = () => {
    const navigate = useNavigate();

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
                status="warning"
                title="Thanh toán thất bại, vui lòng thử lại!"
                extra={[
                    <Button
                        type="primary"
                        onClick={() => navigate("/")}
                        key="back"
                    >
                        Về vùng làm việc
                    </Button>,
                ]}
            />
        </div>
    );
};
export default App;
