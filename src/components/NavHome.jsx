import '../styles/Home.scss'
import { FaUserEdit, FaCashRegister, FaGifts, FaPrint, FaUser } from 'react-icons/fa'

const NavHome = () => {
  return (
    <nav className='navHome'>
      <section className='logo'>
        <img className='imgLogo' src="../../public/logo-yesventas.png" alt="Logo-yesventas" />
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
          <li className='item'>osll2001{/* Hard Data */}</li>
          <li className='item'> <FaUserEdit className='editAccount' /> </li>
          <li className='item'>Cerrar Sesión</li>
        </ul>
      </section>
    </nav>
  )
}

export default NavHome
