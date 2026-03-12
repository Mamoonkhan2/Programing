import {useDispatch} from 'react-redux'
import {setUser} from "../Store/singup"
import Profile from './Profile'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z as zod} from 'zod'
const schema = zod.object({
  name:zod.string().min(3).max(20),
  email:zod.string().email(),
  password:zod.string().min(6).max(20),
  conformPass:zod.string().min(6).max(20),
}).refine((data) => data.conformPass === data.password, {
  message: "Passwords don't match",
  path: ["conformPass"],
})
function Input() {
    // const context = React.useContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,reset,formState:{errors},handleSubmit,getValues,setValue} = useForm(
      {
        defaultValues:{
          name: '',
          email: '',
          password: '',
          conformPass: '',
        }
      },
      {
        resolver: zodResolver(schema), // Connects Zod to React Hook Form
      }
    )
    const onSubmits = (data)=> {
          
          // validation
          dispatch(setUser(data))
          reset()
          setTimeout(() => {
            navigate('/')
          }, 1000);
        }
    return (
      <>
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-60 h-60 gap-1' >
              <form onSubmit={handleSubmit(onSubmits)}>
                <label className='text-2xl text-gray-600'>Email</label>
                <input 
                  type="email"
                  placeholder='Enter your Email'
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800'
                  {...register('email')}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label className='text-2xl text-gray-600'>Name</label>
                <input 
                  type="text"
                  placeholder='Enter your Name '
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800'
                  {...register('name')}
                />
                  {errors.name && <p>{errors.name.message}</p>}
                  <label className='text-2xl text-gray-600'>password</label>
                <input 
                  type="text"
                  placeholder='enter password'
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800'
                  {...register('password')}
                />
                {errors.password && <p>{errors.password.message}</p>}
                  <label className='text-2xl text-gray-600'>conformPass</label>
                <input 
                  type="text"
                  placeholder='Enter your password '
                  className='text-2xl mb-1 p-1 border-2 border-b-black-800'
                  {...register('conformPass')}
                />
                {errors.conformPass && <p>{errors.conformPass.message}</p>}
                <button
                  className='m-3 text-2xl rounded-lg p-1 border-2 bg-amber-700 border-b-black-800'
                  type='submit'
                >
                submit
                </button>
              </form>
            </div>    
        </div>
        <div className='w-full flex content-center justify-center items-center'>

        </div>

      </>
    )
}

export default Input