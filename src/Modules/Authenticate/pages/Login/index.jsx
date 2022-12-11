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
import './style.scss';
import Loading from '../../../../Component/Common/Loading';
import authApi from '../../../../api/authApi';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);

        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          password: 'Dolsmaidinh@1234',
          avatar: result.user.photoURL,
        };

        setLoading(true);
        authApi
          .signUpWithGoogle(userData)
          .then((res) => {
            console.log(res);

            if (!res) return setLoading(false);

            localStorage.setItem('token', res.data);
            navigate('/');
          })
          .catch((err) => {
            setLoading(false);
            message.error(err);
          });
      })
      .catch((err) => {
        message.error(err.data.message);
      });
  };

  const mapErorToVn = {
    'The account has been baned!': 'Tài khoản của bạn đã bị khoá!',
    'The password is incorrect!': 'Sai mật khẩu!',
  };

  const handleLogin = async (value) => {
    setLoading(true);

    try {
      const res = await authApi.login(value);

      if (!res) return setLoading(false);

      localStorage.setItem('token', res.data);

      navigate('/');
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
            <h1>Đăng nhập</h1>
            <div className="controls">
              <Button onClick={handleSignInWithGoogle}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />{' '}
                Tiếp tục với google
              </Button>
            </div>
            <div className="space"></div>
            <Form onFinish={handleLogin}>
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
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>

              <Form.Item>
                <Button className="btn-red" htmlType="submit">
                  Tiếp tục với Email
                </Button>
              </Form.Item>
              <div className="option">
                <Link to="../">Quên mật khẩu?</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Login;
