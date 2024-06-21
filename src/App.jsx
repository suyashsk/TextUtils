
import './App.css'
import Header from './Components/Header'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { useState } from 'react'
import Footer from './Components/Footer'
function App() {
  const[mode,setMode] = useState(false);
  return (
    <div className={mode ? "dark" : "light"}>
    <BrowserRouter>
    <Header mode={mode} setMode={setMode} />
    <Routes >
    <Route path='/' element={<Home  />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    
    <Footer />
    </BrowserRouter>

    </div>
  )
}

export default App
