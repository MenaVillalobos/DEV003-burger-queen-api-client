import './index.css'
import update from '../../imgsBQ/UserHist5/updateIcon.png'
import deleteEmpIcon from '../../imgsBQ/UserHist5/deleteEmp.png'

function EmployeesRoles ({employeesGralData, roleColor, getAllEmployees, removeEmployees}) {
    console.log(employeesGralData);
    return(
        <div className='employeeDataContainer'>
            {employeesGralData.map((employee) => {
                return(<div className={`dataContainer ${roleColor}`}>
                    <div className='employeeName'>{employee.name}</div>
                    <div className='employeeRole'>{employee.role}</div>
                    <div className='employeeEmail'>{employee.email}</div>
                    <div className='deleteUpdateContainer'>
                        <button className='updateEmployeeButton'>
                            <img src={update} alt='updateBtnIcon' className='updateButtonIcon'></img>
                        </button>
                        <button className='deleteEmployeeButton' onClick={() => removeEmployees(employee.id)}>
                        <img src={deleteEmpIcon} alt='deleteBtnIcon' className='deleteButtonIcon'></img>
                        </button>
                    </div>
                </div>)
            })}
        </div>
    )
}
export default EmployeesRoles;