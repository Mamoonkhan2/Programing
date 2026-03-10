import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appConfig } from '../../appWrite/config';
import { useForm } from 'react-hook-form';

function PostForm({post}) {

    const navigate = useNavigate()
    const userData = useSelector(state=>state.auth.userData);
    const {register,handleSubmit,watch,control,setValue,} = useForm({
        defaultValues:{
            id:post.$id||'',
            title:post.title||'',
            contant:post.contant||'',
            status:post.status||'',
        }
    })
    const submit = async (data)=>{
        if(post){
            const file = data.image[0] ?  appConfig.uploadFile(data.image[0]) : null;
            if(file){
                appConfig.deleteFile(post.image[0])
            }
            const dbupdateimage = await appConfig.updateFile(data.$id,{
                ...data,
                featureImage: file ? file.$id : undefined
            })
            if(dbupdateimage) navigate(`/post/${dbupdateimage.$id}`)
        }else{
            const uploadImage = await appConfig.uploadFile(data.image[0])
            if(uploadImage){
            const fileId = uploadImage.$id;
            data.featureImage = fileId;
            const updatePost = await appConfig.createTable({
                ...data,
                slug:userData.$id,
            })
            if(updatePost) navigate(`post/${updatePost.$id}`)}
        }
    }

    return (
<>
</>
    )
}

export default PostForm