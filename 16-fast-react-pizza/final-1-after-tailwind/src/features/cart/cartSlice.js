import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [
        {
            pizzaId: 1,
            name: 'Margherita',
            quantity: 1,
            price: 8.99,
            totalPrice: 8.99,
        }
    ],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity+= 1;
            item.totalPrice = item.quantity * item.price;
        },
        decreaseItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity * item.price;
        },
        clearCart: (state) => {
            state.cart = [];
        },
    }
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export const getTotalCartPrice = (state) => state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);