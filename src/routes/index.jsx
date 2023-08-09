import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import NavHome from '../components/NavHome'
import Footer from '../components/Footer'
import Sales from '../pages/Sales'
import Products from '../pages/Products'
import Reports from '../pages/Reports'
import Users from '../pages/Users'
import Costumers from '../pages/Costumers'
import Configuration from '../pages/Configuration'

const RouterIndex = () => {
  const location = useLocation()
  const { pathname } = location
  // determina si path es login o signup
  const hideNavbar = ['/login', '/signup'].includes(pathname)
  return (
    <>
      {hideNavbar ? <></> : <header> <NavHome /> </header>}
      <Routes>
        <Route exact path='/home' element={<Home />} />
        {/* Redirect the patch "/" to "/home" */}
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/products' element={<Products />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/users' element={<Users />} />
        <Route path='/costumers' element={<Costumers />} />
        <Route path='/configuration' element={<Configuration />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default RouterIndex
