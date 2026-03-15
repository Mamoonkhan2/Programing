import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appConfig } from '../../appWrite/config';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Select from '../Select';
function PostForm({post}) {
    const navigate = useNavigate();
    const {register,handleSubmit,setValue,getValues,control} = useForm({
        defaultValues:{
            title:post?.title||"",
            content:post?.content||"",
            status:post?.status||"Active",
            featureImage:post?.featureImage||"",
            slug:post?.slug||"",
        }
    });
    const userData = useSelector((state)=>state.auth.userData);
    const submit = async (data)=>{
        if(post){
            const imageUpdate = data.image[0] ? await appConfig.uploadFile(data.image[0]) : null   ;
            if(imageUpdate){
                appConfig.deleteFile(post.featureImage);
            }
            const updatePost = await appConfig.updatePost(post.$id,{...data,featureImage:imageUpdate?.$id?imageUpdate.$id:undefined});
            if(updatePost) navigate(`/post/${updatePost.slug}`);
        }
        else{
            const imageUpload = await appConfig.uploadFile(data.image[0]);
            if(imageUpload){
                const fileId = imageUpload.$id;
                data.featureImage = fileId;
                const createPost = await appConfig.createTable({...data,UserId:userData.$id});
                if(createPost) navigate(`/post/${createPost.$id}`);
            }
        }
    }
     const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);
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
                            src={appConfig.getFilePreview(post.featuredImage)}
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