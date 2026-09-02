import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {  
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },


    updateQuantity: (state, action) => {
      const { id, change } = action.payload; // +1 or -1
      
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        item.quantity += change;

        if (item.quantity < 1) {
          item.quantity = 1; // prevent going below 1
        }
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },


    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },


    calculateTotal: (state) => {
    state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});


export const { addToCart, updateQuantity, removeFromCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;


// Wishlist

const wishlistInitialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
};
 
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: wishlistInitialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlistItems.find((i) => i.id === item.id);
 
      if (!exists) {
        state.wishlistItems.push(item);
      }
 
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
 
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (i) => i.id !== action.payload
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
 
    toggleWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlistItems.find((i) => i.id === item.id);
 
      if (exists) {
        state.wishlistItems = state.wishlistItems.filter((i) => i.id !== item.id);
      } else {
        state.wishlistItems.push(item);
      }
 
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
 
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});
 
export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
