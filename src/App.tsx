import { Routes, Route } from 'react-router-dom'

import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { Context } from './contexts/Context'

const App = () => {
  return (
    <div>
      <h1>Titulo da Pagina</h1>
      <hr />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/exibir' element={<ShowData />} />
      </Routes>
    </div>
  )
}

export default App