import React from "react";

const Input = ({
  name,
  type,
  onChange,
  options,
  inputValue,
  labelText
/*   onBlur,
  errorMessages, */
}) => {
  let inputField;
  if (type === "select") {
    inputField = (
      <div>
      {  <select
          value={inputValue}
          className="form-select"
         /*  className={`form-select ${
            errorMessages[name] !== "" ? "danger" : ""
          }`} */
          onChange={onChange}
          name={name}
           /* onBlur={onBlur}  */
        >
         {options.map((option) => (
            <option value={`${option === 'Válassz!'? '' : option}`} key={option}>
              {option}
            </option>
          ))} 
        </select> }
      </div>
    );
  } else {
    inputField = (
      <input
        onChange={onChange}
        /* className={`form-control ${errorMessages[name] !== "" ? "danger" : ""}`} */
        className="form-control"
        value={inputValue}
        type={type}
        name={name}
        placeholder=""
        /* onBlur={onBlur} */
      />
    );
  }

  return (
    <div>
      <label htmlFor={name} className={`form-label`}>
        {labelText}
      </label>
      {inputField}
     {/*  <div className="text-danger">{errorMessages[name]}</div> */}
    </div>
  );
};

export default Input;
