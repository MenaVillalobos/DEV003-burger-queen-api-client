import './index.css'
import { getCookie } from '../../Utils'
import { useEffect, useState } from 'react'

function UpdateData ({userData}) {
    console.log(userData);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('AQUI VA LA VALIDACION DE LOS DATOS Y PETICION')
    }
    return (
        <div className='formGralContainer'>
            {userData.map((employee) => {
                return (<form onSubmit={handleSubmit} className='data'>
                    <label className='description'> Empleadx:
                        <input value={employee.name} type="text" className='inputTxt' />
                    </label>
                    <label className='description'> Cargo:
                        <input value={employee.role} type="text" className='inputTxt' />
                    </label>
                    <label className='description'> E-mail:
                        <input value={employee.email} type="text" className='inputTxt' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>)
            })}
        </div>
    )
}

export default UpdateData;