import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import  InputBox  from './Component/InputBox'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // here i am use coustom Hook 
  const currencyInfo = useCurrencyInfo("from")
  console.log("currency",currencyInfo);

  // hold only keys from API 
  const options = (currencyInfo !== null && typeof currencyInfo === 'object') ? Object.keys(currencyInfo) : "Error"

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Convert Amount 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-financial-stock-market-data-vector-technology-background-image_972702.jpg")`}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
              }}>
              <div className='w-full mb-1'>
                <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)}/>
              </div>

              <div className='reltive w-full h-0.5'>
                <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>swap</button>
              </div>
              
              <div className='w-full mt-1 mb-4'>
                <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={from} amountDisable/>
              </div>

              <button type='submit' className='w-full bg-blue-600 text-white px-4 py3 rounded-lg 
              '>Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default App
