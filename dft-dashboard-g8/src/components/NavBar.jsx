import { NavLink } from "react-router-dom";
import '../index.css';

const NavBar = () => {
    return (
        <nav className="navBarContainer">
            <NavLink to="/">
                <div>
                    <img src="/dft-logo.webp" alt="logo" />
                </div>
            </NavLink>
            <h1>Bienvenido Admin!</h1>
        </nav>
    )
}

export default NavBar