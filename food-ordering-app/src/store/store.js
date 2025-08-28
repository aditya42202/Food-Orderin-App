import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "../slice/cartSlice";
import authReducer from "../slice/authSlice";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const persistConfig ={
    key:"root", //The key under which data is stored
    storage  //local-storage
};

//Wrap cart reducer with the persist reducer
const persistCartReducer = persistReducer(persistConfig, cartReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer:{
        cart: persistCartReducer, //Use the persist cart reducer
        auth: persistAuthReducer
    }
});

//Persistor for persisting state
export const persistor = persistStore(store);