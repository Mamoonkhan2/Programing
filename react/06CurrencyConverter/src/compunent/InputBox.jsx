
function InputBox({
    label,
    amount,
    setAmount,
    amountDisabled=false,
    curencyDisabled=false,
    currentCurency = 'usd',
    onCurencyChange,
    curencyOptions = ["usd","pkr"],
    className = "usd",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e)=> setAmount && setAmount(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currentCurency}
                    onChange={(e) => onCurencyChange && onCurencyChange(e.target.value)}
                    disabled={curencyDisabled}
                >
                    
                {curencyOptions.map(
                    (c)=> 
                        (
                            <option value={c}>
                                {c}
                            </option>
                        )
                    )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;