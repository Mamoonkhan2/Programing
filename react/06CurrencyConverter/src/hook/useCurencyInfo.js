import { useEffect,useState } from "react";

function useCurencyinfo(curency) {
    //using data state to store the curency information
    const [data, setData] = useState({});
    //fetching the curency information from the api and setting the data state with the response
    useEffect(() => {
        //fetching the curency information from the api and setting the data state with the response
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`).then(res => res.json()).then(data => {
            //setting the data state with the response
            setData(data[curency]);
        }).catch(err => console.log(err))

    }, [curency])
    //returning the data state which contains the curency information
    return data
}


export default useCurencyinfo;