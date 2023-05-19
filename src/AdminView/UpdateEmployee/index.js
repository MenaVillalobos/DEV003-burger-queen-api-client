import './index.css'
import { getCookie } from '../../Utils'
import { useState } from 'react'

function UpdateData ({userData, getEmployeesRequest, showForm}) {
    console.log(userData)
    const [name, setName] = useState(userData[0]?.name);
    const [role, setRole] = useState(userData[0]?.role);
    const [email, setEmail] = useState(userData[0]?.email);
    const handleInputData = (event) => {
        console.log(event)
        const currentField = event.target.name;
        if(currentField === 'name') {
            setName(event.target.value);
        } else if(currentField === 'role') {
            setRole(event.target.value)
        } else {
            setEmail(event.target.value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('AQUI VA LA VALIDACION DE LOS DATOS Y PETICION')
        const bodyRequest = {
            name,
            role,
            email,
        }
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/users/' + userData[0].id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
            body: JSON.stringify(bodyRequest)
        }).then(answer => answer.json())
        .then(json => {
            console.log(json);
            getEmployeesRequest();
            showForm(false);
        })
    }
    
    return (
        <div className ='formGralContainer'>
            {userData.map((employee) => {
                return (<form onSubmit = {handleSubmit} className = 'data'>
                    <label className ='description'> Empleadx:
                        <input name='name' value = {name} type = 'text' className = 'inputTxt' onChange={handleInputData} />
                    </label>
                    <label className='description'> Cargo:
                        <input name='role' value = {role} type = 'text' className = 'inputTxt' onChange={handleInputData} />
                    </label>
                    <label className ='description'> E-mail:
                        <input name='email' value = {email} type = 'text' className ='inputTxt' onChange={handleInputData} />
                    </label>
                    <input type = 'submit' value = 'Editar' className ='submitButton' />
                </form>)
            })}
        </div>
    )
}

export default UpdateData;