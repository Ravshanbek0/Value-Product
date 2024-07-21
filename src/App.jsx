import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Info from './pages/info/Info'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/Create/Create'

function App() {
  const [data2, setData2] = useState([])


  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  setData2={setData2} />} />
          <Route path='/info/:id' element={<Info data2={data2}  />} />
          <Route path='/create' element={<Create/>} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
