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
import taskApi from "/src/api/taskApi";

import "/src/css/custom-editor.css";
import { useLocation } from "react-router-dom";


let timer;
const timeout = 500;
let isModalClosed = false;

const BlankTemplate = (props) => {

    const boardId = props.boardId;
    const [task, setTask] = useState(props.task);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const editorWrapperRef = useRef();

    useEffect(() => {
        setTask(props.task);
        setTitle(props.task !== undefined ? props.task.title : "");
        setContent(props.task !== undefined ? props.task.content : "");
        if (props.task !== undefined) {
            isModalClosed = false;

            updateEditorHeight();
        }
    }, [props.task]);

    const updateEditorHeight = () => {
        setTimeout(() => {
            if (editorWrapperRef.current) {
                const box = editorWrapperRef.current;
                box.querySelector(".ck-editor__editable_inline").style.height =
                    box.offsetHeight - 50 + "px";
            }
        }, timeout);
    };

    const onClose = () => {
        isModalClosed = true;
        props.onUpdate(task);
        props.onClose();
    };

    const deleteTask = async () => {
        try {
            await taskApi.delete(boardId, task.id);
            props.onDelete(task);
            setTask(undefined);
        } catch (err) {
            alert(err);
        }
    };

    const updateTitle = async (e) => {
        clearTimeout(timer);
        const newTitle = e.target.value;
        timer = setTimeout(async () => {
            try {
                await taskApi.update(boardId, task.id, { title: newTitle });
            } catch (err) {
                alert(err);
            }
        }, timeout);

        task.title = newTitle;
        setTitle(newTitle);
        props.onUpdate(task);
    };

    const updateContent = async (event, editor) => {
        clearTimeout(timer);
        const data = editor.getData();

        console.log({ isModalClosed });

        if (!isModalClosed) {
            timer = setTimeout(async () => {
                try {
                    await taskApi.update(boardId, task.id, { content: data });
                } catch (err) {
                    alert(err);
                }
            }, timeout);

            task.content = data;
            setContent(data);
            props.onUpdate(task);
        }
    };

    return (
        <>
            
                <TextField
                    value={title}
                    // onChange={updateTitle}
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
                {/* <Typography variant="body2" fontWeight="700">
                    {task !== undefined
                        ? Moment(task.createdAt).format("YYYY-MM-DD")
                        : ""}
                </Typography> */}
                <Divider sx={{ margin: "1.5rem 0" }} />
                
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        // onChange={updateContent}
                        // onFocus={updateEditorHeight}
                        // onBlur={updateEditorHeight}
                    />
             
        </>
    );
};

export default BlankTemplate;
