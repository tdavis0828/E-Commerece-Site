import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.products = [...state.products, payload];
      console.log(state.products);
    },
    removedTOCart: (state, { payload }) => {
      console.log(state.indexOf(payload));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
