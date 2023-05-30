import Wrapper from "../../assets/wrappers/ViewBillPage";
import { useAppContext } from "../../context/appContext";

const ViewBill = () => {
    const { monthlyBill } = useAppContext();

    if (monthlyBill.length === 0) {
        return (
            <Wrapper>
                <h3>Bill not selected or has no data...</h3>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <table className="bill">
                <tbody>
                <tr>
                    <th>Department ID</th>
                    <th>Department</th>
                    <th>Service Rental</th>
                    <th>Equipment Rental</th>
                    <th>Other Charges</th>
                    <th>Supplementary Service</th>
                    <th>Directory Advertising</th>
                    <th>Long Distance</th>
                    <th>Directory Assistance</th>
                    <th>Current Charges</th>
                    <th>GST</th>
                    <th>PST</th>
                    <th>Total</th>
                </tr>
                {monthlyBill.map((bill) => {
                    return (
                        <tr key={bill.DepartmentID}>
                            <td>{bill.DepartmentID}</td>
                            <td>{bill.Department}</td>
                            <td>${bill.ServiceRental.toFixed(2)}</td>
                            <td>${bill.EquipmentRental.toFixed(2)}</td>
                            <td>${bill.OtherCharges.toFixed(2)}</td>
                            <td>${bill.SupplementaryService.toFixed(2)}</td>
                            <td>${bill.DirectoryAdvertising.toFixed(2)}</td>
                            <td>${bill.LongDistance.toFixed(2)}</td>
                            <td>${bill.DirectoryAssistance.toFixed(2)}</td>
                            <td>${bill.CurrentCharges.toFixed(2)}</td>
                            <td>${bill.TotalGST.toFixed(2)}</td>
                            <td>${bill.TotalPST.toFixed(2)}</td>
                            <td>${bill.Total.toFixed(2)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Wrapper>
    )
};

export default ViewBill