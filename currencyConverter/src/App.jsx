import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})


  const swap = () => {
  const tempFrom = from
  const tempTo = to
  const tempAmount = amount
  const tempConverted = convertedAmount

  setFrom(tempTo)
  setTo(tempFrom)
  setAmount(tempConverted)
  setConvertedAmount(tempAmount)
}

  // 💱 Convert logic
  const convert = () => {
    if (!currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/18804128/pexels-photo-18804128.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            {/* FROM */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}   // ✅ FIXED
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to {to}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App