import { Link } from 'react-router-dom'
import '../styles/Forms.scss'

const FormLogin = () => {
  return (
    <div className='containerForm'>
      <form className='Form'>

        <section className='formItem title'>
          <h1>Login</h1>
        </section>

        <section className='formItem fields'>
          <div className='field'>
            <label htmlFor='mail'>Email</label>
            <input className='inputForm' type='text' name='email' id='email' />
          </div>
          <div className='field'>
            <label htmlFor='pass'>Contraseña</label>
            <input className='inputForm' type='password' name='pass' id='pass' />
          </div>
        </section>

        <section className='formItem send'>
          <button>Login</button>
        </section>

        <section className='formItem signUp'>
          <p>¿No tienes todavia una cuenta? <Link to='/signup' style={{ color: '#fafafa' }}>Registrate</Link> </p>
        </section>

      </form>

    </div>
  )
}

export default FormLogin
