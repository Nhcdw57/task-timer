import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/star-stable-online'>
      
      </Route>
      
    </Routes>
      
  )
}

export default App
