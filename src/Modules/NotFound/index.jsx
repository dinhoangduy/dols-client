import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Xin lỗi, trang bạn đang truy cập không tồn tại."
            extra={<Button type="primary" onClick={()=> navigate('/')}>Về trang chủ</Button>}
        />
    );
};
export default App;
