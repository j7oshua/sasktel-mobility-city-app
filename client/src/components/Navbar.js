import Logo from "./Logo";
import { useAppContext } from "../context/appContext";
import { FaAlignLeft } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";

/**
 * The navbar that gets displayed on top of the screen.
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = () => {
    const { toggleSidebar } = useAppContext()
    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">

                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar