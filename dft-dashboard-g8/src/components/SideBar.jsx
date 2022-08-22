import { NavLink } from "react-router-dom";
import '../index.css';

const SideBar = () => {
    return (
        <div className="sidebar">

            <h3> Control Productos </h3>              
            <hr />
            <ul>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/products/:id">Product Detail</NavLink>
                </li>
                <li>
                    <NavLink to="/categories">Categories</NavLink>
                </li>
            </ul>
            <h3> Control Usuarios </h3>    
            <hr />
            <ul>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/users/:id">User Detail</NavLink>
                </li>
            </ul>
            <hr />
        </div>
        
    )
}

export default SideBar