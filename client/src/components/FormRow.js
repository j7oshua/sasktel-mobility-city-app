/***
 * This component is used to create a form row by utilizing the props that are passed in.
 * @param type
 * @param name
 * @param value
 * @param handleChange
 * @param labelText
 * @returns {JSX.Element}
 * @constructor
 */
const FormRow = ({type, name, value, handleChange, labelText}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label>
            <input className="form-input" type={type} id={name} name={name} value={value} onChange={handleChange}/>
        </div>
    )
}

export default FormRow;