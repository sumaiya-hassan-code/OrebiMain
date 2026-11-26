import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Cart from './Layouts/Cart'
import Login from './Pages/Login'
import MyAccount from './Pages/MyAccount'
import Signup from './Pages/SignUp'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<Home />} />   
        <Route path="/cart" element={<Cart />} />   
        <Route path="about" element={<About />} /> 
        <Route path="Shop" element={<Shop />} /> 
        <Route path="Contact" element={<Contact />} /> 
        <Route path="Login" element={<Login/>} /> 
        <Route path="MyAccount" element={<MyAccount/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
