import {useAppContext} from "../context/appContext";

/**
 * This component takes in either a department or phone mapping prop. Will display the correct table based on what
 * prop is passed in. Uses a couple context functions that will get called when the user clicks on the delete button.
 * @param departments
 * @param phonemappings
 * @returns {JSX.Element}
 * @constructor
 */
const DisplayTable = ({departments, phonemappings}) => {
    const {deleteDepartment, deletePhoneMapping} = useAppContext();
    return (
        <>
            <table className="display-table">
                <tbody>
                <tr>
                    {departments && <>
                        <th>Department ID</th>
                        <th>Department</th>
                    </>}
                    {phonemappings && <>
                        <th>Department ID</th>
                        <th>Department</th>
                        <th>Phone Number</th>
                    </>}
                </tr>
                {departments && departments.map((department) => {
                    const {DepartmentID, Department} = department;
                    return (
                        <tr key={DepartmentID}>
                            <td>{DepartmentID}</td>
                            <td>{Department}</td>
                            <td><button className="btn delete-btn" onClick={()=> deleteDepartment(DepartmentID)}>Delete</button></td>
                        </tr>
                    )
                })}
                {phonemappings && phonemappings.map((phonemapping) => {
                    const {DepartmentID, Department, PhoneNumber} = phonemapping;
                    return (
                        <tr key={PhoneNumber}>
                            <td>{DepartmentID}</td>
                            <td>{Department}</td>
                            <td>{PhoneNumber}</td>
                            <td><button className="btn delete-btn" onClick={()=> deletePhoneMapping(PhoneNumber)}>Delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
};

export default DisplayTable;