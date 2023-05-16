import './index.css'
import { getCookie } from '../Utils'
import adminLogo from '../imgsBQ/UserHist5/adminLogo.png'
import staffIcon from '../imgsBQ/UserHist5/staffIcon.png'
import { useEffect, useState } from 'react'
import EmployeesRoles from './EmployeesRoles'
import addIcon from '../imgsBQ/UserHist5/addEmpIcon.png'
import { json } from 'react-router-dom'

function AdminView() {
    const [employeesData, setEmployeesData] = useState([]);
    const [adminEmployee, setAdminEmployee] = useState([]);
    const [chefEmployee, setChefEmployee] = useState([]);
    const [waiterEmployee, setWaiterEmployee] = useState([]);

    const getEmployeesList = () => {
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/users', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        })
        .then(answer => answer.json())
        .then( json => {
            const employeesDataAnswer = json;
            setEmployeesData(employeesDataAnswer);
            const adminRole = employeesDataAnswer.filter((employee) => {
                return (employee.role === 'admin')
            })
            setAdminEmployee(adminRole);
            const chefRole = employeesDataAnswer.filter((employee) => {
                return (employee.role === 'chef')
            })
            setChefEmployee(chefRole);
            const waiterRole = employeesDataAnswer.filter((employee) => {
                return (employee.role === 'waiter')
            })
            setWaiterEmployee(waiterRole);
        })
    }
    const removeEmployee = (id) => {
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        }).then(answer => answer.json())
        .then(json => {
            getEmployeesList();
        })
    } 

    useEffect(() => {
        getEmployeesList();
    }, [])
    return(
        <div className='adminViewGralContainer'>
            <header className='adminHeader'>
                <img className='adminLogoImg' src={adminLogo} alt='logo del header admin view'></img>
                <span className='helloAdmin'>¡Bienvenidx Admin!</span>
                <img className='staffHeaderImg' src={staffIcon} alt='staff icon'></img>
            </header>
            <div className='employeesInitialPage'>
                <section className='addEmployeeContainer'>
                    <button className='addEmployeeBtn'>
                        <img src={addIcon} className='addEmployeesIcon'></img>
                    </button>
                </section>
                <main className='employeesDataContainer'>
                    <section className='adminsList'>
                        <EmployeesRoles employeesGralData = {adminEmployee} roleColor='adminsContainer' getAllEmployees = {getEmployeesList} removeEmployees = {removeEmployee}/>
                    </section>
                    <section className='chefsList'>
                        <EmployeesRoles employeesGralData = {chefEmployee} roleColor='chefsContainer' getAllEmployees = {getEmployeesList} removeEmployees = {removeEmployee}/>
                    </section>
                    <section className='waitersList'>
                        <EmployeesRoles employeesGralData = {waiterEmployee} roleColor='waiterContainer' getAllEmployees = {getEmployeesList} removeEmployees = {removeEmployee}/>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AdminView;