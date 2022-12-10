import { configureStore } from "@reduxjs/toolkit"
import userReducer from './features/userSlice'
import userDataSlice from "./features/userDataSlice"
// import boardReducer from './features/boardSlice'
// import favouriteReducer from './features/favouriteSlice'
import currentWorkspaceReducer from "./features/currentWorkspaceSlice"
export const store = configureStore({
  reducer: {
    workspace: currentWorkspaceReducer,
    user: userReducer,
    userData: userDataSlice
    // board: boardReducer,
    // favourites: favouriteReducer
  }
})