import './index.css'
import bQLogo from '../../imgsBQ/bQ_Orange_Logo.png'
import welcomeGif from '../../imgsBQ/favBurgerGf.gif'

function LogInWelcome() {
    return(
        <div className='LogInWelcome'>
            <div className='bQtxtLogo'>
                <img className='burgerQlogo' src={bQLogo}/>
            </div>
            <div className='welcomeContainer'>
                <div className='squidwardContainer'>
                    <img className='welcomeGif' src={welcomeGif}/>
                </div>
            </div>
        </div>
    )
}
export default LogInWelcome;