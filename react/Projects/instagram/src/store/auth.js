import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    status  : false ,
    userData:[],
}

export const authentication = createSlice(
    {
        name:"authentication",
        initialState,
        reducers:{
            login(state,action){
                state.userData = action.payload
                state.active = true
            },
            logout(state){
                state.userData = []
                state.active = false
            }
        }
    }
)
export const {login,lagout} = authentication.actions
export default authentication.reducer
