import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import "./style.scss";
import Loading from "../../Component/Common/Loading";
// Moment
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// AntD
import {
  Col,
  Row,
  Menu,
  message,
  Radio,
  Input,
  DatePicker,
  Upload,
  Avatar,
  Form,
  Button,
} from "antd";
import ImgCrop from "antd-img-crop";
import {
  RollbackOutlined,
  LoadingOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
// Firebase
import { store } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { isEmpty } from "lodash";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dateFormat = "DD-MM-YYYY";
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("00-00-0000");
  const [avatar, setAvatar] = useState("");
  const [menuKey, setMenuKey] = useState("1");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let userData = await userApi.getOne();
      return userData;
    };
    fetchData()
      .then((res) => {
        setUserData(res.data);
        setName(res.data.firstName);
        setGender(res.data.gender);
        setEmail(res.data.email);
        if (res.data.birthDay) {
          setBirthday(res.data.birthDay);
        }
        setAvatar(res.data.avatar);
        setPassword(res.data.password);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [location]);

  // Information

  const updateProfile = async (data) => {
    const res = await userApi.update(data);
    if (res) {
      return res;
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name == "") {
      message.error("Tên không được để trống");
      setLoading(false);
    } else {
      const data = {
        firstName: name,
        gender: gender,
        birthDay: birthday,
        avatar: avatar,
        email: email,
      };
      updateProfile(data)
        .then((res) => {
          message.success("Lưu thông tin thành công!");
          setLoading(false);
        })
        .catch((err) => {
          message.error("Thông tin bị lỗi");
          setLoading(false);
        });
    }
  };

  // Password
  const updatePassword = async (data) => {
    const res = await userApi.updatePW(data);
    if (res) {
      return res;
    }
  };

  const changePassword = (e) => {
    setLoading(true);

    const data = {
      oldPass: e.oldPassword,
      newPass: e.newPassword,
    };

    updatePassword(data)
      .then((res) => {
        message.success("Đổi pass thành công!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // Menu
  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const menuItems = [
    getItem("1", "Thông tin cá nhân"),
    getItem("2", "Mật khẩu"),
  ];

  const onChangeMenu = (e) => {
    setMenuKey(e.key);
  };

  // Name
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // Radio
  const onChangeGender = (e) => {
    // 1: Male & 2: Female
    setGender(e.target.value);
  };

  // Birthday
  const onChangeBirthday = (e) => {
    if (e) {
      const date = moment(e._d).format(dateFormat);
      setBirthday(date);
    }
  };

  // Avatar
  const [imgErr, setImgErr] = useState(false);
  const [uploading, setUploading] = useState(false);
  const handleChange = (info) => {
    if (info.file && !imgErr) {
      setUploading(true);
      const imgRef = ref(store, `images/${info.file.name + info.file.uid}`);

      uploadBytes(imgRef, info.file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setAvatar(url);
          setUploading(false);
        });
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Chỉ hỗ trợ file JPG/PNG!");
      setImgErr(true);
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Hình ảnh kích cỡ tối đa là 2MB!");
      setImgErr(true);
    }

    setImgErr(false);

    return false;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user-profile">
          <div className="background-image">
            <div className="background-sphere one"></div>
            <div className="background-sphere two"></div>
            <div className="background-sphere three"></div>
            <div className="background-sphere four"></div>
            <div className="background-sphere five"></div>
            <div className="background-sphere six"></div>
          </div>

          <div className="layout">
            <Row className="title">
              <h1>
                <span onClick={() => navigate("/")}>
                  <RollbackOutlined />
                </span>
                Quản lí tài khoản
              </h1>
            </Row>

            <Row className="content">
              <Col flex={1} className="menu">
                <Menu
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  onClick={onChangeMenu}
                  items={menuItems}
                />
              </Col>
              <Col flex={9} className="detail">
                {menuKey == 1 ? (
                  <form className="information" action="">
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
                              src={avatar}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          )}
                        </Upload>
                      </ImgCrop>
                      Ảnh đại diện
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Họ tên </label>
                      <Input
                        name="name"
                        placeholder="Name"
                        defaultValue={name}
                        onBlur={onChangeName}
                        addonAfter={<UserOutlined />}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Giới tính </label>
                      <Radio.Group
                        name="gender"
                        onChange={onChangeGender}
                        value={gender}
                      >
                        <Radio value="male">Nam</Radio>
                        <Radio value="female">Nữ</Radio>
                      </Radio.Group>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Email </label>
                      <Input
                        name="email"
                        placeholder="Email"
                        defaultValue={email}
                        readOnly
                        addonAfter={<MailOutlined />}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Ngày sinh </label>
                      <DatePicker
                        name="birthday"
                        onChange={onChangeBirthday}
                        defaultValue={moment(birthday, dateFormat)}
                        format={dateFormat}
                        allowClear={false}
                        bordered={false}
                      />
                    </div>
                    <button
                      className="button-submit"
                      type="submit"
                      onClick={submitChange}
                    >
                      Save Profile
                    </button>
                  </form>
                ) : (
                  <Form className="password" onFinish={changePassword}>
                    <div className="form-group">
                      <Form.Item
                        name="oldPassword"
                        label="Nhập mật khẩu cũ"
                        rules={[
                          {
                            pattern:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-_=+[{\]}\\|;:'",<.>/?]).{8,20}$/,
                            message:
                              "Mật khẩu cần phải có 8 - 20 kí tự, 1 kí tự in hoa, 1 số!",
                          },
                          {
                            required: true,
                            message: "Vui lòng nhập mật khẩu cũ!",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Mật khẩu cũ" />
                      </Form.Item>
                      <Form.Item
                        name="newPassword"
                        label="Đặt mật khẩu mới"
                        rules={[
                          {
                            pattern:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-_=+[{\]}\\|;:'",<.>/?]).{8,20}$/,
                            message:
                              "Mật khẩu cần phải có 8 - 20 kí tự, 1 kí tự in hoa, 1 số!",
                          },
                          {
                            required: true,
                            message: "Vui lòng nhập mật khẩu mới!",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Mật khẩu mới" />
                      </Form.Item>
                    </div>
                    <Button className="button-change" htmlType="submit">
                      Thay đổi
                    </Button>
                  </Form>
                )}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
