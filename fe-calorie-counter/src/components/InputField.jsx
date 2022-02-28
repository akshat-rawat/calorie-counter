
const InputField = (props) => {
    return <div className="form-div">
        <label className="form-label">Enter {props.labelName}: </label>
        <input className="form-input" type={props.inputType} name={props.inputName} defaultValue={props.defaultValue} onChange={props.onChange} /> <br />
    </div>
}

export default InputField;