import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'


function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="*" index element={<Home />} />          
        <Route path="about" element={<About />} /> 
        <Route path="Shop" element={<Shop />} /> 
        <Route path="Contact" element={<Contact />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
