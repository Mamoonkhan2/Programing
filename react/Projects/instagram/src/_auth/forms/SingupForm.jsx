import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { SignupValidation } from "../../lib/validation/SingUpSchma"
import '../../global.css'
import { Link } from "react-router-dom"
import { Loader } from "lucide-react"
import { createAccount } from "../../lib/appwrite/api"

export default function SignupForm() {
  const [isloading, setIsLoading] = React.useState(false)
  const form = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
      name:'',
      email:'',
      password:'',
      

    },
    mode:'onChange'
  })

  async function onSubmit(data) {
    setIsLoading(true)
      try {
        const response = await createAccount(data);
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log('error in the onsubmit singupform.jsx ::->',error)
      }
      finally{
        setIsLoading(false);
      }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" />
               <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use snapgram, Please enter your details
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>name</FormLabel>
                          <FormControl>
                            <Input  type="text" className="shad-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input className="shad-input"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input type="email" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input type="password" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="shad-button_primary w-full bg-primary-500 hover:bg-primary-600"
              >
                {isloading ? 
                <div className="flex-center gap-2">
                 <Loader/>Loading...

                </div>
                 : "Submit"}
              </Button>
              <p className="text-small-regular text-light-2 text-center mt-2">
                  Already have an account?
                  <Link
                    to="/sign-in"
                    className="text-primary-500 text-small-semibold ml-1">
                    Log in
                  </Link>
              </p>
          </form>
      
      </div>
    </Form>
  )
}