import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({ //useState와 비슷한 역할
    name : 'user',
    initialState: {name:'kim', age: 20},
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        plusNum(state, action){ //파라미터를 추가하여 입력되는 값을 더해주는 방식
            state.age += action.payload  //.payload를 써주어야 전달됨
        }
    }
})

export default user;