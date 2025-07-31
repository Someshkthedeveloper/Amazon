import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./fivedata/five.css'
import './card/maincard.css'
import"./OfferScroll/Trending.css"
import Listitem from './card/Listitem'
import Tendinglist from './OfferScroll/Tendinglist'
import Fivelist from './fivedata/Fivelist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listitem/>
   <Tendinglist/>
   <Fivelist/>
    </>
  )
}

export default App
