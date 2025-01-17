import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const[data,setData]=useState({})
    //call api
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
            .then(response => response.json())
            // to hold the data 
            .then((response)=>setData(response[currency]))
            console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;