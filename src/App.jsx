
import { Route, Routes } from 'react-router-dom'
import  PizzaProvider  from './context/PizzaProvider';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detalle from './pages/Detalle'
import Carrito from './pages/Carrito'

function App() {


  return (
    <>
      <PizzaProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<Detalle />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </PizzaProvider>
    </>
  )
}

export default App
