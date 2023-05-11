import {useState, useEffect, useContext} from 'react';
import {Logo, FormRow, Alert} from "../components";
import Wrapper from '../assets/wrappers/RegisterPage';
import {useAppContext} from "../context/appContext";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true
}

const Register = () => {
    const {isLoading, showAlert, displayAlert} = useAppContext();
    const [values, setValues] = useState(initialState);

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
            displayAlert();
            return;
        }
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={handleSubmit}>
                <Logo />
                <h3>{values.isMember ? "Login" : "Register"}</h3>
                {showAlert && <Alert />}
                {!values.isMember &&  <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    {values.isMember ? "Not registered?" : "Already registered?"}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register;