import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../Data'

const initialState = {
    products: storeData,
    amount: 0,
    total: 0,
    basketVal: [],
    basketCount: 0, 
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increamentAmount: (state, action) => {
            const item = state.products.find(item => item.name === action.payload);
        },

        decreamentAmount: (state, action) => {
            const item = state.products.find(item => item.name === action.payload);
            item.amount > 1 ? item.amount-- : 0;
        },

        addToBasket: (state, action) => {
            state.basketVal.push(action.payload)
            state.basketCount++;
        }
    }

    

})

export const {increamentAmount, decreamentAmount, addToBasket} = basketSlice.actions;

export default basketSlice.reducer;