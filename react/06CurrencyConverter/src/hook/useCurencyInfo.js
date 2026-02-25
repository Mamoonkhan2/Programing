import { useEffect,useState } from "react";

function useCurencyinfo(curency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`).then(res => res.json()).then(data => {
            setData(data[curency]);
            console.log(data); 
        }).catch(err => console.log(err))

    }, [curency])
    return data
}


export default useCurencyinfo;