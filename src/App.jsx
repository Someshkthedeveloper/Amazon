import Rout from './Routerpage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element = {<Rout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
