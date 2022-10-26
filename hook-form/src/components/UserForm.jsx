import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [form, setForm] = useState({
    //     firstName : "",
    //     lastName : "",
    //     password : "",
    //     confirmPassword : "",
    //     email : ""
    // });

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome: ", newUser);
    };
    return (
        <form onSubmit= { createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setfirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setlastName(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h1>Form Data: </h1>
                <p>First Name: { firstName } </p>
                <p>Last Name: { lastName } </p>
                <p>Email: { email } </p>
                <p>Password: { password } </p>
                <p>Confirm Password: { confirmPassword } </p>
            </div>
        </form>
    )
}

export default UserForm