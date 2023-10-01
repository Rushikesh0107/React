import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../Data'

const initialState = {
    products: storeData,
    amount: 0,
    total: 0,
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increamentAmount: (state, {payload}) => {
            const item = state.products.find(item => item.name === payload.name);
            item.amount++;
        },

        decreamentAmount: (state, action) => {
            const item = state.products.find(item => item.name === action.payload.name);
            item.amount > 0 ? item.amount-- : 0;
        }
    }
})

export const {increamentAmount, decreamentAmount} = basketSlice.actions;

export default basketSlice.reducer;