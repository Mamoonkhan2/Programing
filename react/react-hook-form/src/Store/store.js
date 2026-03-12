import {configureStore} from '@reduxjs/toolkit'
import singUpReducer from './singup'
const store = configureStore({
    reducer:{
        auth:singUpReducer
    }
})

export default store;