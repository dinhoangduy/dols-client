import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import workspaceApi from "../../api/workspaceApi";
import "./style.scss";
import Loading from "../../Component/Common/Loading";
// Moment
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// AntD
import { Col, Row, Menu, message, Input, Upload, Avatar, Form } from "antd";
import ImgCrop from "antd-img-crop";
import { RollbackOutlined, LoadingOutlined } from "@ant-design/icons";
// Firebase
import { store } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [workspaceData, setWorkspaceData] = useState("");
  const [menuKey, setMenuKey] = useState("1");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let workspaceData = await workspaceApi.getAll();
      return workspaceData;
    };
    fetchData()
      .then((res) => {
        setWorkspaceData(res.data);
        setName(res.data[0].name);
        if (res.data[0].image != "") {
          setAvatar(res.data[0].image);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [location]);

  // Main
  const serverChange = async (data) => {
    const res = await workspaceApi.update(workspaceData[0].id, data);
    if (res) {
      setLoading(false);
      return res;
    }
  };

  const submitChange = (e) => {
    setName(e.wsTitle);
    const data = { name: e.wsTitle, image: avatar };
    setLoading(true);
    serverChange(data)
      .then((res) => message.success("Đổi thành công"))
      .catch((err) => {
        message.error("Đổi thất bại");
        console.log(err);
      });
  };

  // Menu
  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const menuItems = [getItem("1", "Cơ bản")];

  const onChangeMenu = (e) => {
    setMenuKey(e.key);
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
        <div className="settings">
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
                Cài đặt workspace
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
                <Form className="basic-form" onFinish={submitChange}>
                  <Form.Item
                    label="Tên workspace"
                    name="wsTitle"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng không để trống",
                      },
                    ]}
                    initialValue={name}
                  >
                    <Input placeholder="Nhập tên workspace" showCount maxLength={40}/>
                  </Form.Item>
                  <Form.Item
                    name="wsImage"
                    label="Ảnh đại diện"
                    className="image-field"
                  >
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
                  </Form.Item>
                  <Form.Item>
                    <button type="submit" className="submit-btn">
                      Lưu thông tin
                    </button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
