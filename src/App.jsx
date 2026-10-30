import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Cart from './Layouts/Cart'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="*" element={<Home />} />   
        <Route path="/cart" element={<Cart />} />   
        <Route path="about" element={<About />} /> 
        <Route path="Shop" element={<Shop />} /> 
        <Route path="Contact" element={<Contact />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
