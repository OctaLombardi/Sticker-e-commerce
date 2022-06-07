import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Containers/Home.js'
import Carrito from '../Containers/Carrito.js'
import Producto from '../Containers/Producto.js'
import Layout from '../Components/Layout.js'
import UseContext from '../Context/UseContext.js'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Carrito' element={<Carrito />}></Route>
              <Route path='/Producto' element={<Producto />}></Route>
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}


