import {useDispatch} from 'react-redux'
import {setUser} from "../Store/singup"
import Profile from './Profile'
import {useNavigate} from 'react-router-dom'
import {useForm, Watch} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z as zod} from 'zod'
import { useEffect,useCallback } from 'react'
const schema = zod.object({
  name:zod.string().min(3,'required more then 3').max(20 ,'required less then 20'),
  email:zod.string().email("Enter a valid email").max(20,"required less then 20"),
  password:zod.string().min(6 ,"password must be more then 6").max(20,"password must be less then 20"),
  conformPass:zod.string().min(6,"password must be more then 6").max(20,"password must be less then 20"),
}).refine((data) => data.conformPass === data.password, {
  message: "Passwords don't match",
  path: ["conformPass"],
})
let render = 0;
function Input() {
  render++;
    // const context = React.useContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,reset,formState:{errors},handleSubmit,setValue,resetField,setFocus,watch} = useForm(
      {
        defaultValues:{
          name: '',
          email: '',
          password: '',
          conformPass: '',
        },
        resolver: zodResolver(schema), // Connects Zod to React Hook Form
        mode: 'all'
      },
    )
    const onSubmits = (data)=> {
          // validation
          dispatch(setUser(data))
          reset()
          setTimeout(() => {
            navigate('/')
          }, 1000);
        }
        const fun = useCallback((value)=>{
            if (!value || value.trim() === ' ') {
              setValue("conformPass", " "); // Set empty, not "-"
              return "";
            }

            const result = value
              .trim()
              .toLowerCase()
              // Replace spaces, but check if we need to replace the first letter
              .replace(/\s+/g, '-') // Replace spaces with -
              .replace(/^[a-zA-Z]/, (match) => match); // Keep
            // setValue("conformPass", result);
            // console.log(result)
            return result; 
    },[])
    useEffect(( )=>{
     const values = watch((value, { name, type }) => {
    // 'value' contains all form values
    // 'name' is the field that triggered the change
    if (name === 'conformPass') {
      setValue('password',fun(value.conformPass))
    }
  });
    },[watch()])
    return (
      <>

        <div className='flex justify-center'>
            <div className='w-300 h-100 gap-1 bg-amber-100 flex flex-wrap justify-center items-center' >
              {render}
              <form onSubmit={handleSubmit(onSubmits)}>
                <label className='text-2xl text-gray-600'>Email</label>
                <input 
                  type="email"
                  placeholder='Enter your Email'
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800 p-1'
                  {...register('email' )}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                <label className='text-2xl text-gray-600'>Name</label>
                <input 
                  type="text"
                  placeholder='Enter your Name '
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800 p-1'
                  {...register('name',{required:true})}
                />
                  {errors.name && <p className='text-red-500'> {errors.name.message}</p>}
                  <label className='text-2xl text-gray-600'>password</label>
                <input 
                  type="text"
                  placeholder='enter password'
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800 p-1'
                  {...register('password' ,{required:true})}
                />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                  <label className='text-2xl text-gray-600'>conformPass</label>
                <input 
                  type="text"
                  placeholder='Enter your password '
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800 p-1'
                  {...register('conformPass' ,{required:true})}
                />
                {errors.conformPass && <p className='text-red-500'>{errors.conformPass.message}</p>}
                <div className='flex justify-center items-center'>

                <button
                  className='m-3 text-2xl rounded-lg p-1 border-2 hover:bg-amber-300 hover:text-black hover:font-bold transition-all duration-500 bg-amber-700 border-b-black-800'
                  type='submit'
                >
                submit
                </button>
                <button type='button' className='m-3 text-2xl rounded-lg p-1 border-2 hover:bg-amber-300 hover:text-black hover:font-bold transition-all duration-500 bg-amber-700 border-b-black-800' onClick={()=>{
                  setValue('email','fahad@gmail.com');
                  setValue('name',"fahad")
                  setValue('password',"fahad")
                  setValue('conformPass',"fahad")
                }}>click</button>
                <button type='button' className='m-3 text-2xl rounded-lg p-1 border-2 hover:bg-amber-300 hover:text-black hover:font-bold transition-all duration-500 bg-amber-700 border-b-black-800' onClick={()=>{
                  reset()
                }}>reset</button>
                <button type='button' 
                className='m-3 text-2xl rounded-lg p-1 border-2 hover:bg-amber-300 hover:text-black hover:font-bold transition-all duration-500 bg-amber-700 border-b-black-800'
                 onClick={()=>{
                  // resetField('email')
                  resetField('name')
                  resetField('password')
                 
                  // resetField('conformPass')
                }}>
                resetField Name|Pass
                </button>
                <button type='button' className='m-3 text-2xl rounded-lg p-1 border-2 hover:bg-amber-300 hover:text-black hover:font-bold transition-all duration-500 bg-amber-700 border-b-black-800' onClick={()=>{
                  setFocus('email')
                }}
                >
                  FocusEmail
                </button>
                </div>
              </form>
            </div>    
        </div>
        <div className='w-full flex content-center justify-center items-center'>

        </div>

      </>
    )
}

export default Input