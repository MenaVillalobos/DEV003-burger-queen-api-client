import './index.css'

function AddNewEmployee ({getEmployeesRequest, showAddForm}) {
    // const getAllEmployees = () => {
    //     const getCookieResult = getCookie('token');
    //     fetch('http://localhost:8080/users', {
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${getCookieResult}`
    //         },
    //     })
    //     .then(answer => answer.json())
    // }
    const handleSubmitAddEmp = (event) => {
        event.preventDefault();
        const newUserName = document.getElementById('username').value;
        const newUserEmail = document.getElementById('userEmail').value;
        const newUserPassword = document.getElementById('userPassword').value;
        const newUserRole = document.getElementById('userRole').value;
        const newUserBodyRequest = {
            name: newUserName,
            email: newUserEmail,
            password: newUserPassword,
            role: newUserRole
        }
        console.log(newUserBodyRequest);
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserBodyRequest)
        }).then(answer => answer.json())
        .then(answer => {
            console.log(answer);
            getEmployeesRequest();
            showAddForm(false);
        })
    }
    return(<div className='newEmployeeFormContainer'>
            <form onSubmit={handleSubmitAddEmp} className='entryData'>
                <div className='labInputContainer'>
                    <label className='tagName'>Nombre: 
                    <div className='inputContainer'>
                        <input name = 'name' type = 'text' className = 'inputText' id='username'></input>
                    </div>
                    </label>
                </div>
                <div className='labInputContainer'>
                    <div className='labelContaier'>
                        <label className='tagName'>Email: 
                        <div className='inputContainer'>
                            <input name = 'email' type = 'text' className = 'inputText' id='userEmail'></input>
                        </div>
                        </label>
                    </div>
                </div>
                <div className='labInputContainer'>
                    <div className='labelContaier'>
                        <label className='tagName'>Password: 
                        <div className='inputContainer'>
                            <input name = 'password' type = 'password' className = 'inputText' id='userPassword'></input>
                        </div>
                        </label>
                    </div>
                </div>
                <div className='labInputContainer'>
                    <div className='labelContaier'>
                        <label className='tagName'>Rol: 
                        <div className='inputContainer'>
                            <input name = 'role' type = 'text' className = 'inputText' id='userRole'></input>
                        </div>
                        </label>
                    </div>
                </div>
                <div className='submitContainer'>
                    <input type = 'submit' value = 'Agregar' className ='submitAddEmployeeBtn' />
                </div>
            </form>
        </div>)
}

export default AddNewEmployee;