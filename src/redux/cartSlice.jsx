import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.products = [...state.products, payload];
    },
    removeFromCart: (state, { payload }) => {
      const newArr = current(state.products).filter(
        (product) => product.id !== payload
      );
      state.products = [...newArr];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
