import React from 'react';

const Display = (props) => {
    //destructure props
    const {firstName, lastName, email} = props.inputs;
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: password</p>
            <p>Confirm Password: password</p>
        </div>
    );
}

export default Display;