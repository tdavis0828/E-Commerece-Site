import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, payload, action) => {
      state.value = [...state, payload];
      console.log('ran add to cart function');
    },
    // removeFromCart: ({state, payload}) => {
    //     state.value = payload;
    // }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
