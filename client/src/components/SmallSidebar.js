import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { useAppContext } from "../context/appContext"
import Logo from "./Logo"
import NavLinks from "./NavLinks";

/**
 * This sidebar will get displayed on smaller screens.
 * @returns {JSX.Element}
 * @constructor
 */
const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useAppContext()
    return (
        <Wrapper>
            <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <button type="button" className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <Logo />
                    <NavLinks toggleSidebar={toggleSidebar}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar