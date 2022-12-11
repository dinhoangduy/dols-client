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
import { RollbackOutlined, LoadingOutlined } from "@ant-design/icons";
// Firebase
import { store } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { isEmpty } from "lodash";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let userData = await userApi.getOne();
      return userData;
    };
    fetchData()
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [location]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="settings">
          <div className="background-image"></div>
          <div className="layout">
            <Row className="title">
              <h1>
                <span onClick={() => navigate("/")}>
                  <RollbackOutlined />
                </span>
                Cài đặt
              </h1>
            </Row>

            <Row className="content"></Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
