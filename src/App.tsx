import { Routes, Route } from 'react-router-dom'

import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'




const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/exibir' element={<ShowData />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App