import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-6 space-y-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-amber-400">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Generated password"
            readOnly
            className="flex-1 bg-slate-900 text-amber-300 px-3 py-2 rounded-lg outline-none border border-slate-700"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg font-medium">
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Password Length</span>
            <span className="text-amber-400">12</span>
          </div>
          <input
            type="range"
            min="6"
            max="32"
            className="w-full accent-amber-500"
          />
        </div>

        {/* Options */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-amber-500 w-4 h-4" />
            <span className="text-slate-200">Include Numbers</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-amber-500 w-4 h-4" />
            <span className="text-slate-200">Include Characters</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-amber-500 w-4 h-4" />
            <span className="text-slate-200">Include Uppercase</span>
          </label>
        </div>

        {/* Generate Button */}
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-xl font-semibold tracking-wide">
          Generate Password
        </button>

      </div>
    </div>
  
  )}
export default App
