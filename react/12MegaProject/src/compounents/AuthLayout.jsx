import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Loader} from './index'
function AuthLayout({children,authentication=true}) {
    const [loading,setloading] = useState(true);
    const status = useSelector(state => state.auth.status);
    const navigate = useNavigate()
    useEffect(()=>{
        if(authentication && status !== authentication){
            navigate('/login');
        }
        else if(!authentication && status !== authentication){
            navigate('/')
        }
        setloading(false)
    },[status,authentication,navigate])
    loading ? <Loader/> : <>{children}</> 
}

export default AuthLayout