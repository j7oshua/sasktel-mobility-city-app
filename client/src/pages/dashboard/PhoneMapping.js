import Wrapper from "../../assets/wrappers/PhoneMappingPage";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { Loading, DisplayTable, FormRow, Alert } from "../../components";

const PhoneMapping = () => {
    const {phoneMappings,
        getPhoneMappings,
        isLoading,
        showAlert,
        displayAlert,
        DepartmentID,
        PhoneNumber,
        handleChange,
        createPhoneMapping,
    } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!DepartmentID || !PhoneNumber){
            displayAlert();
            return;
        }
        createPhoneMapping();
        getPhoneMappings();
    }

    const handlePhoneMappingInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({name, value});
    }

    useEffect(() => {
        getPhoneMappings();
    }, [])

    if (isLoading){
        return <Loading center />
    }

    return (
        <Wrapper>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    {showAlert && <Alert />}
                    <FormRow type="number" name="DepartmentID" value={DepartmentID} handleChange={handlePhoneMappingInput}/>
                    <FormRow type="text" name="PhoneNumber" value={PhoneNumber} handleChange={handlePhoneMappingInput}/>
                    <button type="submit" className="btn btn-block">
                        Add
                    </button>
                </form>
                {phoneMappings.length !== 0 ? <DisplayTable phonemappings={phoneMappings} /> : <h3>No phone mappings</h3> }
            </div>
        </Wrapper>
    )
}

export default PhoneMapping