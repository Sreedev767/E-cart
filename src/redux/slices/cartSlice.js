import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name : "cart",
  initialState : [],
  reducers : {
    // actions
    //function to add
    addToCart : (state,action)=>{
      state.push(action.payload)
    },
    //function to remove item
    removeFromCart :(state,action)=>{
      return state.filter(item=>item.id!=action.payload)
    },
    //function to empty the cart
    emptyCary : (state)=>{
      return state = []
    }
  }
})

export const {addToCart,removeFromCart,emptyCary} = cartSlice.actions

export default cartSlice.reducer