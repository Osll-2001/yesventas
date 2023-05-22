import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      {/* Redirect the patch "/" to "/home" */}
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RouterIndex
