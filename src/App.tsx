import { Routes, Route } from 'react-router-dom'

import { Home } from './Componentes/Home'

const App = () => {
  return (
    <div>
      <h1>Titulo da Pagina</h1>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App