import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// ======= redux
import { useDispatch, useSelector } from 'react-redux';
import { setUserRegister } from '../../../../redux/features/userSlice';

// ======= antd
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Upload,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

// ======= img
import logo from '../../../../assets/images/logo.png';

// ======= firabase
import { store } from '../../../../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import authApi from '../../../../api/authApi';
import Loading from '../../../../Component/Common/Loading';

const Onboarding = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userRegister);

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg'
  );
  const [layout, setLayout] = useState('myself');

  useEffect(() => {
    if (!user.email) navigate('/sign-up');
  }, [location]);

  const handleChange = (info) => {
    if (info.file && !imgErr) {
      setUploading(true);
      const imgRef = ref(store, `images/${info.file.name + info.file.uid}`);

      uploadBytes(imgRef, info.file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
          setUploading(false);
        });
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Chỉ hỗ trợ file JPG/PNG!');
      setImgErr(true);
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Hình ảnh kích cỡ tối đa là 2MB!');
      setImgErr(true);
    }

    setImgErr(false);

    return false;
  };

  const onCreateAccount = (value) => {
    const data = { ...value, image: imageUrl };
    dispatch(setUserRegister({ ...user, ...data }));
  };

  const handleSignUp = async (value) => {
    setLoading(true);
    const data = { ...user, ...value };

    try {
      const res = await authApi.signup(data);

      if (!res) return setLoading(false);

      localStorage.setItem('token', res?.data);
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error(error.data.message);
    }
  };

  return (
    <div className="auth">
      {loading && <Loading />}
      <div className="auth__logo">
        <img src={logo} alt="dols.logo" />
      </div>

      <main>
        {user.firstName && user.password ? (
          <Row justify="center" align="center">
            <Col xs={24} md={14} xl={14} className="auth__main chose">
              <h2>Bạn sẽ làm việc với ai ở DOLS?</h2>
              <p>
                Chúng tôi sẽ tổ chức hợp lý trải nghiệm thiết lập của bạn cho
                phù hợp!
              </p>

              <Form onFinish={handleSignUp}>
                <Form.Item name="layout" initialValue={layout}>
                  <Radio.Group value={layout}>
                    <Radio.Button value="myself" className="radio-btn">
                      <div className="radio_card">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/dols-a767c.appspot.com/o/images%2F0c1164da7f8d61f27f84699fedb79e6d.jpgrc-upload-1668324418455-7?alt=media&token=023cac5e-58cb-46c7-aa72-6b02920c022a"
                          alt=""
                        />
                        <h3>Chỉ mình tôi</h3>
                        <p>
                          Viết tốt hơn, suy nghĩ rõ ràng hơn. Làm việc có tổ
                          chức hơn
                        </p>
                        <h5>Miễn phí cho 1 người</h5>
                      </div>
                    </Radio.Button>
                    <Radio.Button value="team" className="radio-btn">
                      <div className="radio_card">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/dols-a767c.appspot.com/o/images%2F04584dbab12f062bf7fc27974cf4bca0.jpgrc-upload-1668324418455-5?alt=media&token=ac096749-a6e6-4abf-b724-80f4d487ac68"
                          alt=""
                        />
                        <h3>Với team của tôi</h3>
                        <p>Cộng tác với tài liệu, các dự án và wiki của bạn</p>
                        <h5>Dùng thử miễn phí</h5>
                      </div>
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>

                <Form.Item>
                  <Button className="btn-blue" htmlType="submit">
                    Chuyển tôi tới DOLS
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        ) : (
          <Row justify="center" align="center">
            <Col xs={24} md={10} xl={6} className="auth__main">
              <h2>Chào mừng đến với DOLS</h2>
              <p>
                Điều đầu tiên, Hãy cho chúng tôi biết một chúc về thông tin của
                bạn!
              </p>

              <Form onFinish={onCreateAccount}>
                <div className="avatar">
                  <ImgCrop rotate>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                      maxCount={1}
                    >
                      {uploading ? (
                        <>
                          <LoadingOutlined />
                          <span> Đang tải ...</span>
                        </>
                      ) : (
                        <Avatar
                          src={imageUrl}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      )}
                    </Upload>
                  </ImgCrop>
                  Ảnh đại diện
                </div>
                <Form.Item
                  name="firstName"
                  label="Chúng tôi nên gọi bạn là gì?"
                  rules={[
                    { required: true, message: 'Vui lòng nhập tên bạn!' },
                  ]}
                >
                  <Input
                    placeholder="e.g: Văn Tùng, Chí Trung..."
                    autoComplete="none"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Đặt mật khẩu"
                  rules={[
                    {
                      pattern:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-_=+[{\]}\\|;:'",<.>/?]).{8,20}$/,
                      message: 'Mật khẩu phải không đúng!',
                    },
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                  ]}
                >
                  <Input.Password placeholder="Mật khẩu mới" />
                </Form.Item>
                <Form.Item>
                  <Button className="btn-blue" htmlType="submit">
                    Tiếp tục
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        )}
      </main>
    </div>
  );
};

export default Onboarding;
