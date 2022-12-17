import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import workspaceApi from "../../api/workspaceApi";
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
import { RollbackOutlined, LoadingOutlined } from "@ant-design/icons";
// Firebase
import { store } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { isEmpty } from "lodash";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [workspaceData, setWorkspaceData] = useState("");
  const [menuKey, setMenuKey] = useState("1");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let workspaceData = await workspaceApi.getAll();
      return workspaceData;
    };
    fetchData()
      .then((res) => {
        setWorkspaceData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [location]);

  // Main
  console.log(workspaceData);

  // Menu
  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const menuItems = [getItem("1", "Tiêu đề")];

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
                Cài đặt
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
                <Form>
                  <Form.Item
                    name="name"
                    label="Tiêu đề workspace"
                    rules={[
                      {
                        pattern: /^$|\s+/,
                        message:
                          "2 dấu cách không được liền nhau!",
                      },
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <Input/>
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
