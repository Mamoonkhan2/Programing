import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status:false,
    userData:{},
}

const signupSlice = createSlice({
    name:'signUp',
    initialState,
    reducers:
    {
        setUser(state,action){
            const data = action.payload
            state.userData = {...data}
            state.status = true;
        },
         setLagOut(state){
            state.userData = {};
            state.status = false;
            
        }
    }
})

export const {setUser,setLagOut} = signupSlice.actions

export default signupSlice.reducer