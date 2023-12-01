import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

export let {changeName, plusNum} = user.actions  //값을 변경하기 위한 user안의 함수들을 export하는 코드

let cart = createSlice({
    name: 'cart' ,
    initialState :  [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers : {
        plus(state, action){
            let num = state.findIndex((a)=>{return a.id === action.payload })
            state[num].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})
export let {addItem, plus} = cart.actions  //값을 변경하기 위한 user안의 함수들을 export하는 코드

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 