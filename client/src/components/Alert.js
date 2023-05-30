import { useAppContext } from "../context/appContext"

/***
 * This component creates a Alert that can be displayed on the page. Uses alertType and alertText context to display
 * the type of alert that is needed at that time.
 * @returns {JSX.Element}
 * @constructor
 */
const Alert = () => {
    const {alertType, alertText} = useAppContext()
    return (
        <div className={`alert alert-${alertType}`}>{alertText}</div>
    )
}

export default Alert