import moment from "moment";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";

/**
 * Component to help display the monthly bill. Takes total amount and bill date as props to display on the page.
 * @param Total
 * @param BillDate
 * @returns {JSX.Element}
 * @constructor
 */
const MonthlyBill = ({Total, BillDate}) => {
    const {viewBill} = useAppContext();
    let date = moment(BillDate);
    date = date.format("MMMM YYYY");
    return (
        <Wrapper>
            <header>
                <div className="main-icon">{date.charAt(0)}</div>
                <div className="info">
                    <h5>{date}</h5>
                    <p>Bill Total : ${Total}</p>
                    <Link to="view-bill" className="btn edit-btn" onClick={viewBill}>
                        View
                    </Link>
                </div>
            </header>
        </Wrapper>
    )
};

export default MonthlyBill;