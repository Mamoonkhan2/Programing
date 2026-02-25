import { useState } from 'react';
import InputBox from './compunent/InputBox' 
import useCurencyinfo from './hook/useCurencyInfo';
function App() {
    let BackgroundImage = 'data:image/jpeg;base64,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'
    
    const [amount,setAmount] = useState(0);
    
    const [currency,setCurency] = useState('usd');
    
    const [from,setFrom] = useState("pkr");
    
    const [to,setTo] = useState('pkr');
    
    let currencyInfo = useCurencyinfo(from);

    let options = Object.keys(currencyInfo);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="Form"
                                className='pkr'
                                // curencyOptions={data}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                setAmount={setAmount}
                                amount={amount}
                                currentCurency={currency}
                                onCurencyChange={setCurency}
                                curencyOptions={options}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
