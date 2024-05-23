import './../css/navbar.css';
import Logo from './../assets/img/logo.png';
import SmallBuyButton from './SmallBuyButton.jsx';

function Navbar(props){
    return(
        <div className="navbar">
            <div>
                <img src={Logo} alt="logo" />
                <h2>Techbazaar</h2> 
            </div>

            <SmallBuyButton setModal={props.setModal} />
        </div>
    )
}

export default Navbar;