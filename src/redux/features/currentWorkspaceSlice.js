import { InsertEmoticonOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const currentWorkspace = createSlice({
    name: "currentWorkspace",
    initialState,
    reducers: {
        setCurrentWorkspaceStore: (state, action) => {
            state.value = action.payload;
        },
        updateBoardTemplateContent: (state, action) => {
            const { boardID, content } = action.payload;
            state.value.board?.forEach((item) => {
                if (item.id === boardID) {
                    item.description = content;
                }
            });
        },
        addNewBoardToWorkspace: (state, action) => {
            state.value.board?.push(action.payload);
        },
        upadateIconBoard: (state, action) => {
            const { boardID, newIcon } = action.payload;
            state.value.board?.forEach((item) => {
                if (item.id === boardID) {
                    item.icon = newIcon;
                }
            });
        },
        upadateTitleBoard: (state, action) => {
            const { boardID, title } = action.payload;
            state.value.board?.forEach((item) => {
                if (item.id === boardID) {
                    item.title = title;
                }
            });
        },
        deleteBoard: (state, action) => {
            const { boardID } = action.payload;
            const clone = state.value;
            let newBoard = state.value.board?.filter((item) => {
                return item.id !== boardID;
            });
            clone.board = newBoard;
            state.value = clone;
        },
    },
});

export const {
    setCurrentWorkspaceStore,
    updateBoardTemplateContent,
    addNewBoardToWorkspace,
    upadateIconBoard,
    upadateTitleBoard,
    deleteBoard,
} = currentWorkspace.actions;

export default currentWorkspace.reducer;
