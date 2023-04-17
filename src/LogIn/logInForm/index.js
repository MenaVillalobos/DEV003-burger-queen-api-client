import './index.css'
import logo from '../../imgsBQ/logoRed.png';

function LogInForm() {
    return(
        <div className='LogInForm'>
            <div className='welcomeMessage'>
                <p className='welcomeTxtMsg'>¡Bienvenidx!</p>
            </div>
            <div className='logoWelcomePage'>
                <img className='welcomeRedLogo' src={logo}/>
            </div>
            <div className='userForm'>
                <div className='logInMessage'>
                    <p className='logInMsg'>Inicio de sesión</p>
                </div>
                <p className='emailTxt'>Correo de empleadx:</p>
                <input className='emailInput' placeholder='Ingresa tu correo aquí'></input>
                <p className='pawwsordTxt'>Contraseña:</p>
                <input className='passwordInput' type='password' placeholder='Contraseña'></input>
                <div className='buttonDiv'>
                    <button className='ingresarBtn'>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}
export default LogInForm;