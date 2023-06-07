import '../styles/Home.scss'
import { FaUserEdit, FaCashRegister, FaGifts, FaPrint, FaUser, FaBars } from 'react-icons/fa'
import { useState } from 'react'

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
          <li className='item'> <FaCashRegister /> Ventas </li>
          <li className='item'> <FaGifts /> Productos</li>
          <li className='item'> <FaPrint /> Reportes</li>
          <li className='item'> <FaUser /> Clientes</li>
          <li className='item'> <FaUser /> Usuarios</li>
        </ul>
      </section>

      <section className='profile'>
        <ul className='itemsProfile'>
          <li className='item userName'>osll2001{/* Hard Data */}</li>
          <li className='item account'> <FaUserEdit className='editAccount' /> </li>
          <li className='item exit'><p className='textExit'>Cerrar Sesión</p></li>
        </ul>
      </section>

      <section className='menuSectionToggle'>
        <div className='iconMenu' onClick={toggleMenu}>
          <FaBars />
        </div>
        {menuDropVisible && (
          <ul className='itemsMenuDropDown'>
            <li className='item userName'><FaUser /> osll2001</li>
            <li className='item editUser'>Configuración</li>
            <li className='item'>Ventas</li>
            <li className='item'>Productos</li>
            <li className='item'>Reportes</li>
            <li className='item'>Clientes</li>
            <li className='item'>Usuarios</li>
            <li className='item exitMenuDrop'>Cerrar Sesión</li>
          </ul>
        )}
      </section>

    </nav>
  )
}

export default NavHome
