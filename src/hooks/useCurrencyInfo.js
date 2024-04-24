import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        const currencyData = fetch(url)
        .then((res) => {
            if (!currencyData) {
                console.log('Network response was not ok');
            }
            res.json()
        })
        .then((res) => setData(res=data))
        .catch(error => {
            console.log('Error fetching data:', error);
            
        });
        console.log(data);
    }, [currency])
    console.log("data: ",data);
    return data
}

export default useCurrencyInfo