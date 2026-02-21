import { useState } from "react"

function App() {
  const [color,setcolor] = useState('olive');
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          
          <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap gap-3 px-2 py-2 rounded-xl shadow-lg justify-center bg-white">
              <button
              className=" bg-red-400 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('red')}
              >
                red
              </button>
              <button
              className=" bg-green-400 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('green')}
              >
                green
              </button>
              <button
              className=" bg-blue-400 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('blue')}
              >
                blue
              </button>
              <button
              className=" bg-gray-400 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('gray')}
              >
                gray
              </button>
              <button
              className=" bg-pink-400 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('pink')}
              >
                pink
              </button>
              <button
              className="bg-amber-600 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('oklch(66.6% 0.179 58.318)')}
              >
                amber
              </button>
              <button
              className="bg-cyan-600 p-2 rounded-xl shadow-lg"
              onClick={()=>setcolor('cyan')}
              >
                cyan
              </button>
            </div>
          </div>
     </div>
    </>
  )
}

export default App
