import LogInForm from "./logInForm";
import LogInWelcome from "./logInWelcome";
import './index.css'

function LogInPage () {
    return(
        <div className="initialPageContainer">
            <LogInForm/>
            <LogInWelcome/>
        </div>
    )
}
export default LogInPage;