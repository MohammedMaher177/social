import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice.js";



let store = configureStore({
    reducer:{
        posts : postsReducer
    }   
})


export default store;