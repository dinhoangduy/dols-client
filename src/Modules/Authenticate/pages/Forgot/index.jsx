import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ======= antd
import { Button, Col, Form, Input, message, Row } from 'antd';

// ======= firabase
import { auth, provider } from '../../../../../firebase';
import { signInWithPopup } from 'firebase/auth';

// ======= img
import logo from '../../../../assets/images/logo.png';

// ======= style
import Loading from '../../../../Component/Common/Loading';
import authApi from '../../../../api/authApi';

const Forgot = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mapErorToVn = {
    'The account has been baned!': 'Tài khoản của bạn đã bị khoá!',
    'The password is incorrect!': 'Sai mật khẩu!',
    'Data is invalid!': 'Email không tồn tại!',
  };

  const handleForgot = async (value) => {
    // setLoading(true);

    message.loading({ content: 'Đang gửi...', key: 1, duration: 1 });

    try {
      const res = await authApi.forgotPass(value);

      if (!res) return setLoading(false);

      message.success({
        content: 'Mật khẩu đã được gửi về mail của bạn!',
        key: 1,
        duration: 2,
      });

      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          message.info({
            content: `Sẽ trở về đăng nhập trong ${3 - i}`,
            key: 2,
            duration: i != 2 ? i + 2 : 1,
          });
        }, 1300 + 1000 * (i + 1));
      }

      setTimeout(() => {
        navigate('/login');
      }, 6000);
    } catch (error) {
      setLoading(false);
      let message2 = mapErorToVn[error.data.message]
        ? mapErorToVn[error.data.message]
        : 'Xảy ra lỗi!';
      message.error(message2);
    }
  };

  return (
    <div className="auth">
      {loading && <Loading />}
      <Link to="/">
        <div className="auth__logo">
          <img src={logo} alt="dols.logo" />
        </div>
      </Link>

      <main>
        <Row justify="center" align="center">
          <Col xs={24} md={10} xl={6} className="auth__main">
            <h1>Quên mật khẩu</h1>

            <div className="space"></div>
            <Form onFinish={handleForgot}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: 'email',
                    message: 'Vui lòng nhập đúng email!',
                  },
                  { required: true, message: 'Vui lòng nhập email!' },
                ]}
              >
                <Input placeholder="Nhập email của bạn ..." />
              </Form.Item>

              <Form.Item>
                <Button className="btn-red" htmlType="submit">
                  Tiếp tục với Email
                </Button>
              </Form.Item>
            </Form>
            <div className="option">
              <Link to="/login">Trở lại</Link>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Forgot;
