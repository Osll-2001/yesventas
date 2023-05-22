import { Link } from 'react-router-dom'
import '../styles/Forms.scss'

const FormSignUp = () => {
  return (
    <div className='containerForm'>
      <form className='Form'>

        <section className='formItem title'>
          <h1>Registro</h1>
        </section>

        <section className='formItem fields'>
          <div className='field'>
            <label htmlFor='mail'>Email</label>
            <input className='inputForm' type='text' name='email' id='email' />
          </div>
          <div className='field'>
            <label htmlFor='pass'>Nombre</label>
            <input className='inputForm' type='text' name='name' id='name' />
          </div>
          <div className='field'>
            <label htmlFor='pass'>Usuario</label>
            <input className='inputForm' type='text' name='userName' id='userName' />
          </div>
          <div className='field'>
            <label htmlFor='pass'>Contraseña</label>
            <input className='inputForm' type='password' name='pass' id='pass' />
          </div>
          <div className='field'>
            <label htmlFor='pass'>Pais</label>
            <select className='inputForm'>
              <option value=''>Seleccionar</option>
              <option value='MX'>México</option>
              <option value='CO'>Colombia</option>
              <option value='PE'>Perú</option>
              <option value='AR'>Argentina</option>
            </select>
          </div>
        </section>

        <section className='formItem send'>
          <button>Registar</button>
        </section>

        <section className='formItem signUp'>
          <p>¿Ya tienes una cuenta? <Link to='/login' style={{ color: '#fafafa' }}>Inicia Sesión</Link> </p>
        </section>

      </form>

    </div>
  )
}

export default FormSignUp
