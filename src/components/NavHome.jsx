import '../styles/Home.scss'
import { FaUserEdit, FaCashRegister, FaGifts, FaPrint, FaUser, FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavHome = () => {
  const [menuDropVisible, setMenuDropVisible] = useState(false)

  /* Muestra y oculta el menu */
  const toggleMenu = () => {
    setMenuDropVisible(!menuDropVisible)
  }

  return (
    <nav className='navHome'>

      <section className='logo'>
        <img className='imgLogo' src='../../public/logo-yesventas.png' alt='Logo-yesventas' />
      </section>

      <section className='sections'>
        <ul className='itemsSection'>
          <li className='item'> <Link to='/sales' className='link'> <FaCashRegister /> Ventas </Link> </li>
          <li className='item'> <Link to='/products' className='link'> <FaGifts /> Productos </Link> </li>
          <li className='item'> <Link to='/reports' className='link'> <FaPrint /> Reportes </Link> </li>
          <li className='item'> <Link to='/costumers' className='link'> <FaUser /> Clientes </Link> </li>
          <li className='item'> <Link to='/users' className='link'> <FaUser /> Usuarios </Link> </li>
        </ul>
      </section>

      <section className='profile'>
        <ul className='itemsProfile'>
          <li className='item userName'>osll2001{/* Hard Data */}</li>
          <li className='item account'> <Link to='/configuration' className='link'>  <FaUserEdit className='editAccount' /> </Link> </li>
          <li className='item exit'> <Link to='/login' className='link'> <p className='textExit'>Cerrar Sesión</p> </Link> </li>
        </ul>
      </section>

      <section className='menuSectionToggle'>
        <div className='iconMenu' onClick={toggleMenu}>
          <FaBars />
        </div>
        {menuDropVisible && (
          <ul className='itemsMenuDropDown'>
            <li className='item userName'><FaUser /> osll2001</li>
            <li className='item editUser'> <Link to='/configuration' className='link' onClick={toggleMenu}> Configuración </Link> </li>
            <li className='item'> <Link to='/sales' className='link' onClick={toggleMenu}> <FaCashRegister /> Ventas </Link> </li>
            <li className='item'> <Link to='/products' className='link' onClick={toggleMenu}> <FaGifts /> Productos </Link> </li>
            <li className='item'> <Link to='/reports' className='link' onClick={toggleMenu}> <FaPrint /> Reportes </Link> </li>
            <li className='item'> <Link to='/costumers' className='link' onClick={toggleMenu}> <FaUser /> Clientes </Link> </li>
            <li className='item'> <Link to='/users' className='link' onClick={toggleMenu}> <FaUser /> Usuarios </Link> </li>
            <li className='item exitMenuDrop'> <Link to='/login' className='link'>  Cerrar Sesión </Link> </li>
          </ul>
        )}
      </section>

    </nav>
  )
}

export default NavHome
