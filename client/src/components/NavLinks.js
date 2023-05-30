import links from "../utils/links";
import {NavLink} from "react-router-dom";

/**
 * This component is used to iterate through the page links that the website will have. These links are used in the
 * big and small sidebar components.
 * @param toggleSidebar
 * @returns {JSX.Element}
 * @constructor
 */
const NavLinks = ({toggleSidebar}) => {
    return (
        <div className="nav-links">
            {links.map((link) => {
                const {text, path, id, icon} = link
                return <NavLink to={path} key={id} onClick={toggleSidebar} className={({isActive})=>isActive ? "nav-link active" : "nav-link"}>
                    <span className="icon">{icon}</span>
                    {text}
                </NavLink>
            })}
        </div>
    )
}

export default NavLinks