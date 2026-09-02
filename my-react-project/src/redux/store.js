import { configureStore } from "@reduxjs/toolkit";
import Cartslice, {wishlistReducer} from "./CartSlice";

export const store=configureStore({
    reducer:{
        cart:Cartslice,
        wishlist: wishlistReducer,
    },
  
});
