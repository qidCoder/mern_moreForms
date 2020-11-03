import React from 'react';
// Sensei Bonus: Only show the validations if the input is not blank (You should not see the error messages if you have not typed anything in)

const Form = (props) =>{
    //destructure props
    const{inputs, setInputs, handleChange} = props;



    return(
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={handleChange} />
            {/* validations: If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters. */}
            <p className="text-danger"> {(inputs.firstName.length > 2 || inputs.firstName.length == 0) ? "" : "Field must be at least 2 characters"}</p>

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" onChange={handleChange} />
            {/* validations: If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters. */}
            <p className="text-danger"> {(inputs.lastName.length > 2 || inputs.lastName.length == 0) ? "" : "Field must be at least 2 characters"}</p>

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={handleChange} />
            {/* validations:The e-mail is less than 5 characters, say the field must be at lease 5 characters. */}
            <p className="text-danger"> { (inputs.email.length > 4 || inputs.email.length == 0) ? "" : "Email must be at least 5 characters"}</p>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={handleChange} />
            {/* validations: The passwords must match and be at least 8 characters. */}
            <p className="text-danger">{(inputs.password.length > 7 || inputs.password.length == 0) ? "" : "Password must be at least 8 characters"}</p>

            <label htmlFor="pw_confirm">Confirm Password:</label>
            <input type="password" name="pw_confirm" onChange={handleChange} />
            <p className="text-danger">{inputs.pw_confirm == inputs.password ? "" : "Passwords do not match"}</p>
        </form>
    );
}

export default Form;