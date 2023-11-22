import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartTotalPrice:0,
        cartTotalQuantity:0,
    },
    reducers: {
        addItem: (state,action)=>{
            console.log(action);
            console.log(action.payload);
            const itemIndex=state.items.findIndex((item)=>{
                return item.card.info.id===action.payload.card.info.id;
            });
            if(itemIndex<0){
                const temp={...action.payload,cartQuantity: 1};
                state.items.push(temp);
            }
            else{
                state.items[itemIndex].cartQuantity+=1;
            }   
            state.cartTotalQuantity+=1;
            state.cartTotalPrice+=action.payload.card.info.price/100||action.payload.card.info.defaultPrice/100;
        },
        removeItem: (state,action)=>{
            const itemIndex=state.items.findIndex((item)=>{ 
                return item.card.info.id===action.payload.card.info.id;
            });

            if(state.items[itemIndex].cartQuantity>1){
                state.items[itemIndex].cartQuantity-=1;
            }
            else{
                state.items.splice(itemIndex,1);
            }

            state.cartTotalQuantity -=1;
            state.cartTotalPrice -=action.payload.card.info.price/100||action.payload.card.info.defaultPrice/100;
        },
        clearCart: (state)=>{
            state.items.length= 0;
            state.cartTotalPrice=0;
            state.cartTotalQuantity=0;
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;