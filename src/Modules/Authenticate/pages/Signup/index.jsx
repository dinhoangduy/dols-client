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

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (!result) return;

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
            dispatch(
              setUserRegister({
                ...userData,
                firstName: result.user.displayName,
              })
            );
            localStorage.setItem('token', res.data);

            navigate('/onboarding');
          })
          .catch((err) => {
            setLoading(false);
            message.error(err.data.message);
          });
      })
      .catch((err) => {
        message.error(err);
      });
  };

  const handleSendMail = async (value) => {
    setLoading(true);

    try {
      const res = await authApi.sendMail(value);

      if (!res) return setLoading(false);

      if (!res.data) {
        setLoading(false);

        return message.error('Email này đã được đăng ký rồi!');
      }

      setVerify(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error(err.data.message);
    }
  };

  const handleVerifyMail = async (value) => {
    setLoading(true);
    try {
      const res = await authApi.active(value);

      if (!res) return setLoading(false);

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

  const handleResendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email: form.getFieldValue('email') };

    try {
      const res = await authApi.resendMail(data);
      if (!res) return setLoading(loading(false));

      setLoading(false);
      message.success('Gửi lại thành công!');
    } catch (error) {
      setLoading(false);
      message.error(error.data.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="auth">
        <Link to="/">
          <div className="auth__logo">
            <img src={logo} alt="dols.logo" />
          </div>
        </Link>

        <main>
          <Row justify="center" align="center">
            <Col xs={24} md={10} xl={6} className="auth__main">
              <h1>Đăng ký</h1>

              <Form
                form={form}
                onFinish={verify ? handleVerifyMail : handleSendMail}
              >
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
                    <Button className="btn-resend" onClick={handleResendMail}>
                      Gửi lại
                    </Button>
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
