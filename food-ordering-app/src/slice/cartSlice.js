import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Stores cart items
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
                console.log(`Updated quantity for ${existingItem.name}:`, existingItem.quantity); // Log Quantity Update
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); //  New item with quantity = 1
                console.log(`Added new item: ${action.payload.name}, Quantity: 1`); // Log New Item
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Reduce quantity instead of removing
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if(item){
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) =>{
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if(itemIndex !== -1){
                if(state.items[itemIndex].quantity > 1){
                    state.items[itemIndex].quantity -=1;
                }else{
                    state.items.splice(itemIndex, 1);
                }
            }
        },
        clearCart: (state) => {
            state.items = []; // Clearing all items
        }
    }
});

// Export the actions
export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
