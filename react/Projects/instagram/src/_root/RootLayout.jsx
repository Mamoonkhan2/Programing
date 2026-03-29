import React from 'react'
import {Button} from '../components/ui/button'
function RootLayout() {
  return (
   <Button children={'hellow'} onClick={(e)=>console.log(e)}/>
  )
}

export default RootLayout