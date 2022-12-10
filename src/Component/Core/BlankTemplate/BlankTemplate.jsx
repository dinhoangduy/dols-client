import {
    Backdrop,
    Fade,
    IconButton,
    Modal,
    Box,
    TextField,
    Typography,
    Divider,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Moment from "moment";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import boardApi from "/src/api/boardApi";

import "/src/css/custom-editor.css";
import { useLocation } from "react-router-dom";
import EmojiPicker from "../../../Modules/Workspace/EmojiPicker";
import { useMemo } from "react";

import { useDebouncedCallback } from "use-debounce";
import { Button, message, Popconfirm, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    updateBoardTemplateContent,
    upadateTitleBoard,
    upadateIconBoard,
    deleteBoard,
} from "../../../redux/features/currentWorkspaceSlice";
import { DeleteOutlined } from "@ant-design/icons";

let timer;
const timeout = 500;
let isModalClosed = false;

const BlankTemplate = ({
    boardID,
    workspaceData,
    setIsSavaLoading,
    setCurrentBoardID,
}) => {
    const dispatch = useDispatch();
    const currentWorkspaceData = useSelector((state) => state.workspace.value);
    const [data, setData] = useState(() => {
        let [data] = currentWorkspaceData?.board?.filter(
            (item) => item.id === boardID
        );
        return data;
    });
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");
    const [content, setContent] = useState("");
    const editorWrapperRef = useRef();

    useEffect(() => {
        let [data] = currentWorkspaceData?.board?.filter(
            (item) => item.id === boardID
        );
        setData(data);
    }, [boardID]);
    useEffect(() => {
        setTitle(data.title);
        setIcon(data.icon);
        setContent(data.description);
    }, [data]);

    const updateTitle = async (e) => {
        setTitle(e.target.value);
        try {
            let res = await boardApi.update(boardID, {
                title: e.target.value,
                workspaceId: currentWorkspaceData.id,
            });
            if (res) {
                dispatch(upadateTitleBoard({ boardID, title: e.target.value }));
            }
        } catch (err) {
            alert(err);
        }
    };
    const updateContent = useDebouncedCallback(async (event, editor) => {
        setIsSavaLoading(true);
        const data = editor.getData();
        dispatch(
            updateBoardTemplateContent({ boardID: boardID, content: data })
        );
        try {
            console.log(data);
            let res = await boardApi.update(boardID, {
                description: data,
                workspaceId: workspaceData.id,
            });
            if (res) setIsSavaLoading(false);
        } catch (err) {
            alert(err);
        }
    }, 1000);

    const updateEditorHeight = () => {
        setTimeout(() => {
            if (editorWrapperRef.current) {
                const box = editorWrapperRef.current;
                box.querySelector(".ck-editor__editable_inline").style.height =
                    box.offsetHeight - 50 + "px";
            }
        }, timeout);
    };

    const onIconChange = async (newIcon) => {
        setIcon(newIcon);
        try {
            let res = await boardApi.update(boardID, {
                icon: newIcon,
                workspaceId: workspaceData.id,
            });

            if (res) {
                dispatch(upadateIconBoard({ boardID, newIcon }));
            }
        } catch (err) {
            alert(err);
        }
    };

    const handleDeleteBoard = async () => {
        try {
            let res = await boardApi.delete(boardID);
            if (res) {
                dispatch(deleteBoard({ boardID }));
            }
            setCurrentBoardID(workspaceData.board[0].id);

            message.success("Xóa thành công!");
        } catch {}
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <EmojiPicker icon={icon} onChange={onIconChange} />
                <TextField
                    value={title}
                    onChange={updateTitle}
                    placeholder="Untitled"
                    variant="outlined"
                    fullWidth
                    sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-input": { padding: 0 },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "unset ",
                        },
                        "& .MuiOutlinedInput-root": {
                            fontSize: "2.5rem",
                            fontWeight: "700",
                        },
                        marginBottom: "10px",
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" fontWeight="700" fontSize="10px">
                    Lần cập nhật cuối{" "}
                    {data !== undefined
                        ? Moment(data.updateAt).format("HH:mm A DD-MM-YYYY")
                        : ""}
                </Typography>
                <Popconfirm
                    title="Bạn thật sự muốn xóa chứ？"
                    placement="bottomLeft"
                    okText="Xóa"
                    cancelText="Trở về"
                    onConfirm={handleDeleteBoard}
                >
                    <Tooltip title="Xóa bảng" placement="left">
                        <DeleteOutlined
                            style={{
                                color: "red",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        />
                    </Tooltip>
                </Popconfirm>
            </div>
            <Divider sx={{ margin: "1.5rem 0" }} />

            <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={updateContent}
                onFocus={updateEditorHeight}
                onBlur={updateEditorHeight}
            />
        </>
    );
};

export default BlankTemplate;
