import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [password,setpassword] = useState('s');
  const [length,setLength] = useState(6);

  const [allowedNumber,setAllowedNumber] = useState(false); 
  
  const [allowedCharacter,setAllowedCharacter] = useState(false);
  let passwrodRef = useRef(null)
 
  function CopyToClipBord(){
    passwrodRef.current.select()
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-6 space-y-6">
    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="data:image/jpeg;base64,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" alt="" />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">Mamoon</p>
          <p class="font-medium text-gray-200">favroute Engineer</p>
        </div>
        <button class="border-purple-200 p-1 rounded-2xl px-2  text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
          Message
        </button>
      </div>
    </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-amber-400">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            ref={passwrodRef}
            readOnly
            className="flex-1 bg-slate-900 text-amber-300 px-3 py-2 rounded-lg outline-none border border-slate-700"
          />
          <button
           onClick={CopyToClipBord}
           className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg font-medium">
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Password Length</span>
            <span className="text-amber-400">{length}</span>
          </div>
          <input
            type="range"
            min="6"
            max="100"
            onChange={e=>setLength(prev => (prev = e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>

        {/* Options */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox"  checked={allowedNumber} onChange={(e)=>setAllowedNumber(e.target.checked)} className="accent-amber-500 w-4 h-4" />
            <span className="text-slate-200">Include Numbers</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={allowedCharacter} onChange={(e)=>setAllowedCharacter(e.target.checked)} className="accent-amber-500 w-4 h-4" />
            <span className="text-slate-200">Include Characters</span>
          </label>

        </div>

        {/* Generate Button */}
        <button
         onClick={
          ()=>{
              let pass = "";
              let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                
              if(allowedCharacter) str+="!@#$%^&*()_+=-|}{:?><,./;][";
              if(allowedNumber)    str+="0123456789";
              for (let i = 1; i <length; i++) {
                let char = Math.floor(Math.random() * length);
                pass+= str[char];
              }  
              setpassword(pass);
          }}
         className="w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-xl font-semibold tracking-wide">
          Generate Password
        </button>

      </div>
    </div>
    </>
  )}
export default App
