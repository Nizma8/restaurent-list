import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantslice";

const store = configureStore({
    reducer:{
        restaurantSlice
    }
})

export default store