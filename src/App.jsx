import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'


function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />          
        <Route path="about" element={<About />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
