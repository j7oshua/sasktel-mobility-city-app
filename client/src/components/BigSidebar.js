import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"
import Logo from "../components/Logo"
import { useAppContext } from "../context/appContext"

/**
 * This component is the sidebar that is displayed on bigger screens.
 * @returns {JSX.Element}
 * @constructor
 */
const BigSidebar = () => {
    const {showSidebar} = useAppContext()
    return (
        <Wrapper>
            <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar