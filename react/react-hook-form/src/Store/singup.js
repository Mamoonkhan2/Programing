import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status:false,
    userData:{},
    post:{
        title:"Live Preview",
        name:"<h1>Live Preview</h1><p>Start typing...</p>",
        contant:"<h1>Live Preview</h1><p>Start typing...</p>"
    },
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
            
        },
        setPost(state,action){
            const {name,title,content} = action.payload
            state.post.name = name;
            state.post.title = title;
            state.post.content = content;
            console.log(state.post)
        }

    }
})

export const {setUser,setLagOut,setPost} = signupSlice.actions

export default signupSlice.reducer