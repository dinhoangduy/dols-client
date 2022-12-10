import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import moment from "moment";
import dayjs from "dayjs";
import "./style.scss";
import Loading from "../../Component/Common/Loading";
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
import { RollbackOutlined, LoadingOutlined } from "@ant-design/icons";
// Firebase
import { store } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [avatar, setAvatar] = useState();
  const [menuKey, setMenuKey] = useState("1");

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
        setBirthday(res.data.birthday);
        setAvatar(res.data.avatar);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [location]);

  // Main
  console.log(userData);

  const updateProfile = async (data) => {
    const res = await userApi.update(data);
    if(res) {
      message.success("Lưu thông tin thành công!")
      return res;
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    const data = {
      firstName: name,
      gender: gender,
      birthDay: birthday,
      avatar: avatar,
      email: email,
    };

    console.log(data);
    updateProfile(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Menu
  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const menuItems = [
    getItem("1", "Basic Information"),
    getItem("2", "Password"),
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
  const dateFormat = "YYYY/MM/DD";
  const onChangeBirthday = (e) => {
    const date = moment(e._d).format("YYYY/MM/DD");
    setBirthday(date);
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
          <div className="layout">
            <Row className="title">
              <h1>
                <span onClick={() => navigate("/")}>
                  <RollbackOutlined />
                </span>
                Settings
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
                      <label htmlFor="">User name </label>
                      <Input
                        name="name"
                        placeholder="Name"
                        defaultValue={name}
                        onBlur={onChangeName}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Gender </label>
                      <Radio.Group
                        name="gender"
                        onChange={onChangeGender}
                        value={gender}
                      >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                      </Radio.Group>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Email </label>
                      <Input
                        name="email"
                        placeholder="Email"
                        defaultValue={email}
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Birthday </label>
                      <DatePicker
                        name="birthday"
                        onChange={onChangeBirthday}
                        defaultValue={dayjs(birthday, dateFormat)}
                        format={dateFormat}
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
                  <Form className="password">
                    <div className="form-group">
                      <Form.Item
                        name="password"
                        label="Đặt mật khẩu mới"
                        rules={[
                          {
                            pattern:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-_=+[{\]}\\|;:'",<.>/?]).{8,20}$/,
                            message:
                              "Mật khẩu cần phải có 8 - 20 kí tự, 1 kí tự đặc biệt, 1 số!",
                          },
                          {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!",
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
