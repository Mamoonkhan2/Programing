import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../Store/singup';

export default function ControllerT() {
  const post = useSelector((state) => state.auth.post);
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false);

  // Initialize form with Redux data
  const { control, handleSubmit, watch,register } = useForm({
    defaultValues: {
      name:post?.name||"",
      content: post?.content || "", // Fallback if post is empty
      title: post?.title || ""
    }
  });
   console.log(post.contant)
  // const liveContent = watch("content");

  const onSubmit = (data) => {
    console.log("Updated Data:", data);
    dispatch(setPost(data))
    setIsEditing(false); // Switch back to view mode after save
    // post = useSelector(state => state.auth.post)
    // const post = updatepost;
  };

  // 1. VIEW MODE
  if (!isEditing) {
    return (
      <div className="min-h-screen bg-slate-50 p-10 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{post?.title}</h1>
          <div className="prose prose-slate lg:prose-xl">
            {/* Using parse to render the Redux HTML content */}
            <p>
              name :    {post?.name}
            </p>
            <p>
             <div className="w-full  flex flex-col gap-4">
              <h2 className="text-xl font-bold text-slate-800 px-2">Live Preview</h2>
              <div className="flex-grow bg-white rounded-2xl p-8 shadow-sm border-2 border-dashed border-slate-300 overflow-y-auto overflow-x-hidden h-[600px]">
                <div className="prose prose-blue max-w-none">
                  {parse(post?.content || "")}
                </div>
              </div>
            </div>


            </p>
          </div>
          <button 
            onClick={() => setIsEditing(true)} 
            className="mt-8 px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition shadow-md"
          >
            Edit Post
          </button>
        </div>
      </div>
    );
  }

  // 2. EDIT MODE (The "Design")
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row p-4 lg:p-8 gap-6">
      
      {/* LEFT: The Editor Form */}
      <div className="w-full  bg-white rounded-2xl shadow-2xl p-6 flex flex-col border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Editing Content</h2>
          <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-red-500">Cancel</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-slate-300 shadow-inner">
            <Controller
              name="content"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Editor
                  apiKey="k15lscpzuhvaicfsg7zk2p10candughqqt7yy4fv4xudzamt"
                  value={value}
                  onEditorChange={onChange}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: ['link','image', 'lists', 'image', 'charmap', 'preview', 'wordcount', 'emoticons'],
                    toolbar: 'undo redo | image |blocks fontfamily | bold italic underline | bullist numlist | emoticons link',
                    content_style: 'body { font-family:Inter,sans-serif; font-size:16px }',
                    branding: false,
                    automatic_uploads: true,
                  }}
                  
                />
              )}
            />
          <input type="text" {...register('name')} />
          <input type="text" {...register('title')} />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
            Save Changes
          </button>
        </form>
      </div>

      {/* RIGHT: The Live Visual Preview */}
     
    </div>
  );
}