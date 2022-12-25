import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Col, message, Row } from "antd";
import { Avatar, Image } from "antd";
import { TreeSelect } from "antd";
import Tour from "reactour";
import wave from '/src/assets/images/wave.svg';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    StarOutlined,
    FileAddOutlined,
    SaveOutlined,
    LogoutOutlined,
    AppstoreAddOutlined,
    UserOutlined,
    RocketOutlined,
} from "@ant-design/icons";
import { Divider } from "@mui/material";
import { Button, Menu, Layout, Checkbox, Form, Input, Select } from "antd";
const { Header, Sider, Content } = Layout;
import { useEffect } from "react";
import "./styles.scss";
import BlankTemplate from "../../Component/Core/BlankTemplate/BlankTemplate";
import KanbanTemplate from "../../Component/Core/KanbanTemplate/KanbanTemplate";
import Loading from "/src/Component/Common/Loading";
const { Option } = Select;
// ** Api
import workspaceApi from "../../api/workspaceApi";
import Modal from "antd/lib/modal/Modal";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import {
    setCurrentWorkspaceStore,
    addNewBoardToWorkspace,
} from "../../redux/features/currentWorkspaceSlice";
import boardApi from "/src/api/boardApi";
import userApi from "../../api/userApi";
import { useSelector } from "react-redux";
import { setUserData } from "../../redux/features/userDataSlice";
import dataApi from "../../api/dataApi";
import taskApi from "../../api/taskApi";
import { Settings } from "@mui/icons-material";
// ** End of-> Api


const Workspace = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [newBoardForm] = Form.useForm();

    const [isTourOpen, setIsTourOpen] = useState(false);

    useEffect(() => {
        let isTourOver = localStorage.getItem("isTourOver");
        if (!isTourOver) {
            setIsTourOpen(true);
        } else {
            setIsTourOpen(false);
        }
    }, []);

    const steps = [
        {
            selector: "#dashboard",
            content: "Nhấn vào đây để xem thêm thông tin và chức năng",
        },
        {
            selector: "#addboard",
            content: "Nhấn vào đây để thêm bảng mới",
        },
        {
            selector: "#payment",
            content: "Bạn có thể nâng cấp tài khoản để trãi nghiệm thêm nhiều tính năng ở đây!",
        },
        {
            selector: "#board",
            content: "Đây là một bảng, nhấn vào để mở bảng",
        },
        {
            selector: "#board-content",
            content: "Đây là vùng hoạt động của bảng",
        },
    ];

    // ** Menu slider
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // ** End of -> Menu slider

    // ** Util Functions
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/home");
    };
    // ** End of -> Util Functions

    const handleChangeBoard = (item) => {
        setCurrentTemplate(item.templateId);
        setCurrentBoardID(item.id);
    };

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const renderWorkspaceTitle = (item) => {
        return getItem(item.name, item.id);
    };

    const renderBoardTitle = (item) => {
        return getItem(
            <span
                onClick={() => {
                    handleChangeBoard(item);
                }}
                id="board"
            >
                {item.title}
            </span>,
            item.id,
            <span
                onClick={() => {
                    handleChangeBoard(item);
                }}
            >
                {item.icon}
            </span>
        );
    };

    const treeData = [
        {
            value: "674e1995-80a0-467a-b48f-312502538210",
            title: "Ghi Chú",
        },
        {
            value: "f73f93fe-2cde-48be-8478-2e632b8564fa",
            title: "Lập kế hoạch",
            children: [
                {
                    value: "today",
                    title: "Hằng ngày",
                },
                {
                    value: "week",
                    title: "Cho tuần làm việc",
                },
            ],
        },
    ];

    const renderAllWorkspaceAndBoard = () => {
        let res = [];
        let allTitle = getItem(
            <span id="dashboard">Bảng điều khiển</span>,
            "bangdieukhine",
            <ContainerOutlined />
        );
        allTitle[`children`] = [];
        let allBoard = [];
        allWorkspaceData
            .sort((a, b) => a.position > b.position)
            .forEach((item) => {
                allTitle?.children.push(renderWorkspaceTitle(item));
            });
        // allTitle?.children.push(
        //     getItem(
        //         <span>Tạo vùng làm việc</span>,
        //         "taovunglamviec",
        //         <FileAddOutlined style={{ color: "green" }} />
        //     )
        // );
        allTitle?.children.push(
            getItem(
                <span onClick={() => navigate("../profile")}>
                    Quản lí tài khoản
                </span>,
                "quanlitaikhoang",
                <UserOutlined style={{ color: "blue" }} />
            )
        );
        allTitle?.children.push(
            getItem(
                <span onClick={() => navigate("../settings")}>Cài đặt</span>,
                "quanlivunglamviec",
                <Settings style={{ color: "#000" }} />
            )
        );
        allTitle?.children.push(
            getItem(
                <span onClick={handleLogout}>Đăng xuất</span>,
                "dangxuat",
                <LogoutOutlined style={{ color: "red" }} />
            )
        );
        res.push(allTitle);

        res.push(
            getItem(
                <span onClick={showModal} id="addboard">
                    Thêm bảng mới
                </span>,
                "thembangmoi",
                <AppstoreAddOutlined onClick={showModal} />
            )
        );
        res.push(
            getItem(
                <span onClick={handleUpgrade} id="payment">
                    Nâng cấp tài khoản
                </span>,
                "nangcaptaikhoan",
                <RocketOutlined onClick={handleUpgrade} />
            )
        );
        res.push(getItem(<Divider />, "divider2", <Divider />));
        currentWorkspaceData?.board?.forEach((item) => {
            res.push(renderBoardTitle(item));
        });

        return res;
    };

    // ** Upgrade
   
    const handleUpgrade =  async () => {
        try {
            let res = await userApi.payment();
            console.log(res);
            
        } catch (error) {
            
        }
    };
    // ** End of -> Upgrade

    // ** Get board ID and load board
    const nameMapTemplate = {
        "674e1995-80a0-467a-b48f-312502538210": {
            handle: (
                boardID,
                workspaceData,
                setIsSavaLoading,
                setCurrentBoardID
            ) => {
                return (
                    <BlankTemplate
                        boardID={boardID}
                        workspaceData={workspaceData}
                        setIsSavaLoading={setIsSavaLoading}
                        setCurrentBoardID={setCurrentBoardID}
                    />
                );
            },
            create: async ({ template, title }) => {
                try {
                    let data = {
                        title: title,
                        icon: "📙",
                        description: `<h2><a href="https://emojipedia.org/travel-places">🚀</a>Xin chào bạn, lại là DOLS đây !<a href="https://emojipedia.org/travel-places">🚀</a></h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/four-leaf-clover/">🍀</a>Đây là nơi mà bạn có thể ghi bất cứ thứ gì mà bạn muốn…</h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/new-years-eve/">🎊</a>Chỉ có cái bạn không nghĩ ra chứ không có cái DOLS không có&nbsp;</h2>`,
                        position: currentWorkspaceData.board.length + 4,
                        favourite: "string",
                        favouritePosition:
                            currentWorkspaceData.board.length + 4,
                        workspaceId: workspaceID,
                        templateId: template,
                    };
                    let res = await boardApi.create(data);
                    if (res) {
                        let data = {
                            title: title,
                            icon: "📙",
                            description: `<h2><a href="https://emojipedia.org/travel-places">🚀</a>Xin chào bạn, lại là DOLS đây !<a href="https://emojipedia.org/travel-places">🚀</a></h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/four-leaf-clover/">🍀</a>Đây là nơi mà bạn có thể ghi bất cứ thứ gì mà bạn muốn…</h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/new-years-eve/">🎊</a>Chỉ có cái bạn không nghĩ ra chứ không có cái DOLS không có&nbsp;</h2>`,
                            position: currentWorkspaceData.board.length + 4,
                            favourite: "string",
                            favouritePosition:
                                currentWorkspaceData.board.length + 4,
                            workspaceId: workspaceID,
                            templateId: template,
                            id: res.data,
                        };
                        dispatch(addNewBoardToWorkspace(data));
                        setOpen(false);
                        setConfirmLoading(false);
                        message.success("Tạo bảng thành công!");
                        setCurrentBoardID(res.data);
                    } else {
                        setOpen(false);
                        setConfirmLoading(false);
                    }
                } catch (err) {
                    alert(err);
                }
            },
        },
        "f73f93fe-2cde-48be-8478-2e632b8564fa": {
            handle: (
                boardID,
                workspaceData,
                setIsSavaLoading,
                setCurrentBoardID
            ) => {
                return (
                    <KanbanTemplate
                        boardId={boardID}
                        workspaceData={workspaceData}
                        setIsSavaLoading={setIsSavaLoading}
                        setCurrentBoardID={setCurrentBoardID}
                    />
                );
            },
            create: async ({ template, title }) => {
                let typeMapTemplate = {
                    today: {
                        heading: ["Việc cần làm", "Đang làm", "Đã xong"],
                        icon: "🚀",
                    },
                    week: {
                        heading: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"],
                        icon: "🚗",
                    },
                };
                console.log(title);
                try {
                    let data = {
                        title: title.split("-")[0],
                        icon:
                            typeMapTemplate[title.split("-")[1]].icon ||
                            typeMapTemplate["today"].icon,
                        description: `<h2><a href="https://emojipedia.org/travel-places">🚀</a>Xin chào bạn, lại là DOLS đây !<a href="https://emojipedia.org/travel-places">🚀</a></h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/four-leaf-clover/">🍀</a>Đây là nơi mà bạn có thể ghi bất cứ thứ gì mà bạn muốn…</h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/new-years-eve/">🎊</a>Chỉ có cái bạn không nghĩ ra chứ không có cái DOLS không có&nbsp;</h2>`,
                        position: currentWorkspaceData.board.length + 4,
                        favourite: "string",
                        favouritePosition:
                            currentWorkspaceData.board.length + 4,
                        workspaceId: workspaceID,
                        templateId: template,
                    };
                    let res = await boardApi.create(data);

                    if (res) {
                        let res2 = await dataApi.create({
                            heading:
                                typeMapTemplate[title.split("-")[1]].heading ||
                                typeMapTemplate["today"].heading,
                            boardId: res.data,
                        });

                        if (res2) {
                            let boardNew = await boardApi.getOne(res.data);
                            console.log(boardNew);
                            let task = await taskApi.create({
                                title: "Click vào để xem hướng dẫn",
                                content:
                                    "Bạn có thể chỉnh sửa nội dung của task ở đây, muốn thay đổi trạng thái của task thì kéo sang cột bên cạnh",
                                position: 0,
                                dataId: boardNew.data.datas[0].id,
                            });
                            if (task) {
                                let boardNew2 = await boardApi.getOne(res.data);
                                console.log("boardNew", boardNew2);
                                let data = boardNew2.data;
                                dispatch(addNewBoardToWorkspace(data));

                                setOpen(false);
                                setConfirmLoading(false);
                                message.success("Tạo bảng thành công!");
                                setCurrentBoardID(res.data);
                            }
                        }
                    } else {
                        setOpen(false);
                        setConfirmLoading(false);
                    }
                } catch (err) {
                    alert(err);
                }
            },
        },
    };
    const dispatch = useDispatch();
    const [workspaceID, setWorkspaceID] = useState("");
    const [allWorkspaceData, setAllWorkspaceData] = useState([]);
    const currentWorkspaceData = useSelector((state) => state.workspace.value);
    const userData = useSelector((state) => state.userData.value);
    const [currentBoardID, setCurrentBoardID] = useState("");
    const [items, setItems] = useState([]);
    const [currentTemplate, setCurrentTemplate] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setWorkspaceID(location.pathname.split("/").slice(-1)[0]);
    }, [location]);

    useEffect(() => {
        const fetchWorkspace = async () => {
            try {
                let data = await workspaceApi.getAll();
                let data2 = await userApi.getOne();

                dispatch(setUserData(data2?.data));

                data = data.data;

                setAllWorkspaceData(data);
            } catch {
                handleLogout();
            }
        };

        fetchWorkspace();
    }, [location]);

    useEffect(() => {
        let current = allWorkspaceData.filter(
            (item) => item.id === workspaceID
        );
        // setCurrentWorkspaceData(current[0]);
        dispatch(setCurrentWorkspaceStore(current[0]));
        setCurrentBoardID(current[0]?.board[0].id);
    }, [allWorkspaceData]);

    useEffect(() => {
        let res = renderAllWorkspaceAndBoard();
        setItems(res);
    }, [workspaceID, currentWorkspaceData]);

    useEffect(() => {
        setIsLoading(true);
        let res = currentWorkspaceData?.board?.filter(
            (item) => item.id === currentBoardID
        );
        if (res) {
            setCurrentTemplate(res[0]?.templateId);
            setIsLoading(false);
        }
    }, [currentBoardID]);

    // ** Tao vung lam viec moi
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = async () => {
        let { title, template } = newBoardForm.getFieldValue();

        if (title === "" || template === "") return;

        setModalText("Đang tạo bảng...");

        console.log(template);

        if (template === "today" || template === "week") {
            title += "-" + template;
            template = "f73f93fe-2cde-48be-8478-2e632b8564fa";
        }

        setConfirmLoading(true);

        nameMapTemplate[template].create({ template, title });
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [value, setValue] = useState(undefined);
    const onChange = (newValue) => {
        setValue(newValue);
    };

    const onFinish = (values) => {};
    const onFinishFailed = (errorInfo) => {};

    // ** End of -> Tạo vùng làm việc mới

    // ** End of -> Get workspace ID and load board

    // ** Luu
    const [isSaveLoading, setIsSavaLoading] = useState(false);
    // ** End of -> Luu

    // **

    return (
        <>
            <div className="workspace">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    theme="light"
                    onCollapse={(value) => setCollapsed(value)}
                    width="250px"
                    // className="slider-menu"
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        // defaultSelectedKeys={[currentBoardID]}
                        selectedKeys={[currentBoardID]}
                        mode="inline"
                        items={items}
                        style={{
                            height: "calc(100vh - 48px)",
                            overflowY: "scroll",
                        }}
                        className="slider-menu"
                    />
                </Sider>
                <div className="main" id="board-content">
                    <div className="main__top">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <Avatar
                                src={
                                    <Image
                                        src={userData?.avatar}
                                        style={{
                                            width: 32,
                                        }}
                                    />
                                }
                            />
                            {/* <p style={{ margin: "0" }}>
                                {currentWorkspaceData?.name}
                            </p> */}
                        </div>
                        {currentTemplate ===
                            "674e1995-80a0-467a-b48f-312502538210" && (
                            <div className="other">
                                {/* <StarOutlined /> */}
                                <Button
                                    loading={isSaveLoading}
                                    type={"text"}
                                    className="saving-btn"
                                    // onClick={handleOk}
                                    style={{
                                        color: isSaveLoading ? "blue" : "#000",
                                    }}
                                >
                                    Lưu tự động
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="main__content">
                       
                        {isLoading ? (
                            <Loading />
                        ) : (
                            nameMapTemplate[currentTemplate]?.handle(
                                currentBoardID,
                                currentWorkspaceData,
                                setIsSavaLoading,
                                setCurrentBoardID
                            )
                        )}
                    </div>
                </div>
            </div>
            <Modal
                title="Tạo bảng mới"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Thoát
                    </Button>,
                    <Button
                        key="submit"
                        loading={confirmLoading}
                        type="primary"
                        onClick={handleOk}
                    >
                        Tạo bảng mới
                    </Button>,
                ]}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    form={newBoardForm}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên bảng"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên bảng!",
                            },
                        ]}
                    >
                        <Input placeholder="Vui lòng nhập tên bảng" />
                    </Form.Item>

                    <Form.Item
                        name="template"
                        label="Chọn mẫu"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn mẫu!",
                            },
                        ]}
                    >
                        <TreeSelect
                            showSearch
                            style={{
                                width: "100%",
                            }}
                            value={value}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: "auto",
                            }}
                            placeholder="Chọn một mẫu dưới đây"
                            allowClear
                            treeDefaultExpandAll
                            onChange={onChange}
                            treeData={treeData}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    ></Form.Item>
                </Form>
            </Modal>

            <Tour
                steps={steps}
                isOpen={isTourOpen}
                onRequestClose={() => {
                    setIsTourOpen(false);
                    localStorage.setItem("isTourOver", true);
                }}
            />
        </>
    );
};

export default Workspace;
