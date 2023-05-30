import Wrapper from "../../assets/wrappers/DepartmentsPage";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { Loading, DisplayTable, FormRow, Alert } from "../../components";


const Departments = () => {
    const {departments,
        getDepartments,
        isLoading,
        showAlert,
        displayAlert,
        Department,
        DepartmentID,
        handleChange,
        createDepartment,
        clearValues,
        findDepartment,
        foundDepartment
    } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!DepartmentID || !Department){
            displayAlert();
            return;
        }
        createDepartment();
        getDepartments();
        clearValues();
    }

    const handleDepartmentInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({name, value});
    }

    useEffect(() => {
        getDepartments();
    }, [])

    if (isLoading){
        return  <Loading center />
    }

    return (
        <Wrapper>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    {showAlert && <Alert />}
                    <FormRow type="number" name="DepartmentID" value={DepartmentID} handleChange={handleDepartmentInput}/>
                    <FormRow type="text" name="Department" value={Department} handleChange={handleDepartmentInput}/>
                    <button type="submit" className="btn btn-block">
                        Add
                    </button>
                </form>
                {departments.length !== 0 ? <DisplayTable departments={departments} /> : <h3>No departments</h3> }
            </div>

        </Wrapper>
    )
}

export default Departments