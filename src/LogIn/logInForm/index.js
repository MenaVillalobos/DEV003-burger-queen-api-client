import './index.css'
import logo from '../../imgsBQ/logoRed.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function LogInForm() {
    const [loginError, setloginError] = useState(false);
    const navigate = useNavigate();
    const handleErrorMsg = () => {
        setloginError(false);
    }
    const handleSubmit = () => {
        const emailTxt = document.getElementById('emailInput').value;
        const passwordTxt = document.getElementById('passwordInput').value;
        const loginObject = {
            email: emailTxt,
            password: passwordTxt,
        }
        console.log(loginObject);

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObject)
        }).then(answer => answer.json())
        .then(answer => {
            console.log(answer);
            if (answer === 'Cannot find user'|| answer === 'Incorrect password') {
                setloginError(true);
            } else {
                document.cookie = `token = ${answer.accessToken}`; 
                window.localStorage.setItem('userId', answer.user.id); // guardar id en localStorage
                navigate('/menu')
            }
        });
    }

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
                <input onFocus={handleErrorMsg} className='emailInput' id='emailInput' placeholder='Ingresa tu correo aquí'></input>
                <p className='pawwsordTxt'>Contraseña:</p>
                <input onFocus={handleErrorMsg} className='passwordInput' id='passwordInput' type='password' placeholder='Contraseña'></input>
                {loginError && (<div className='errorDiv'>
                    <p className='errorTxt'>Usuario/contraseña incorrectos</p>
                </div>)}
                <div className='buttonDiv'>
                    <button className='ingresarBtn' onClick={handleSubmit}>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}
export default LogInForm;