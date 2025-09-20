import './App.css'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
// import Error404 from './components/Error404'
// import Login from './Pages/Auth/Login/Login'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Signup from './Pages/Auth/SignUp/Signup'
// import Error403 from './components/Error403'

function App() {

  return (
    <CartProvider>
      {/* <Header />
      <Footer /> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Error404/> */}
      <Cart />
    </CartProvider>
  )
}

export default App
