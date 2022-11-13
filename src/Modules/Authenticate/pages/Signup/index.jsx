import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ======= redux
import { useDispatch } from 'react-redux';
import { setUserRegister } from '../../../../redux/features/userSlice';

// ======= antd
import { Button, Col, Form, Input, message, Row } from 'antd';

// ======= firabase
import { auth, provider } from '../../../../../firebase';
import { signInWithPopup } from 'firebase/auth';

// ======= img
import logo from '../../../../assets/images/logo.png';
import authApi from '../../../../api/authApi';
import Loading from '../../../../Component/Common/Loading';

const Signup = () => {
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = {
          email: result.user.email,
          password: result.user.uid,
          image: result.user.photoURL,
          firstName: result.user.displayName,
        };

        dispatch(setUserRegister(userData));

        navigate('/onboarding');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSendMail = async (value) => {
    setLoading(true);

    try {
      const res = await authApi.sendMail(value);

      if (!res.data) return;

      setVerify(true);
      setLoading(false);
    } catch (err) {
      message.error(err.data.message);
    }
  };

  const handleVerifyMail = async (value) => {
    setLoading(true);
    try {
      const res = await authApi.active(value);

      if (!res.data) {
        setLoading(false);
        message.error('Mã không đúng!');
        return;
      }

      dispatch(setUserRegister({ email: value.email }));
      navigate('/onboarding');
    } catch (error) {
      setLoading(false);
      message.error('Mã không đúng!');
      // message.error(error.data.message);
    }
  };

  const onEmailChange = (value) => {
    verify && setVerify(false);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="auth">
        <div className="auth__logo">
          <img src={logo} alt="dols.logo" />
        </div>

        <main>
          <Row justify="center" align="center">
            <Col xs={24} md={10} xl={6} className="auth__main">
              <h1>Đăng ký</h1>

              <Form onFinish={verify ? handleVerifyMail : handleSendMail}>
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
                  <Input
                    placeholder="Nhập email của bạn ..."
                    onChange={onEmailChange}
                  />
                </Form.Item>

                {verify && (
                  <>
                    {' '}
                    <div className="text">
                      Chúng tôi đã gửi đến mail của bạn một mã đăng ký tạm thời.
                      Vui lòng kiểm tra mail và nhập mã!
                    </div>
                    <Form.Item
                      name="activeKey"
                      label="Mã đăng ký"
                      rules={[{ required: true, message: 'Vui lòng nhập mã!' }]}
                    >
                      <Input placeholder="Dán mã đăng ký..." />
                    </Form.Item>
                  </>
                )}

                <Form.Item>
                  <Button className="btn-red" htmlType="submit">
                    {verify ? 'Tạo tài khoản' : 'Tiếp tục với Email'}
                  </Button>
                </Form.Item>
              </Form>

              <div className="space"></div>
              <div className="controls">
                <Button onClick={handleSignInWithGoogle}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt=""
                  />{' '}
                  Tiếp tục với google
                </Button>
              </div>
            </Col>
          </Row>
        </main>
      </div>
    </>
  );
};

export default Signup;
