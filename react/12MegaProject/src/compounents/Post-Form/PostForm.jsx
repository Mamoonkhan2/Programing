import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appConfig } from '../../appWrite/config';
import { useForm } from 'react-hook-form';

function PostForm({post}) {

    const navigate = useNavigate()
    const userData = useSelector(state=>state.auth.userData);
    const {register,handleSubmit,watch,control,setValue,} = useForm({
        defaultValues:{
            id:post?.$id||'',
            title:post?.title||'',
            contant:post?.contant||'',
            status:post?.status||'',
            slug:post?.slug || ''
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
    const slugTransform = useCallback((value)=>{
            if (value && typeof value === 'string')
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
            return " "  
    },[])
    useEffect(()=>{
        const { unsubscribe } = watch((value,{name}) =>{
            if (name=="title") {
                setValue('slug',slugTransform(value.title))
            }
        return () => unsubscribe();
        }
        )
    },[watch,slugTransform,setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm