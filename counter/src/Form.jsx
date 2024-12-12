import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", pass: "" });

    const hndlName = (event) => {
        setName(event.target.value);
    };

    const hndlEmail = (event) => {
        setEmail(event.target.value);
    };

    const hndlPass = (event) => {
        setPass(event.target.value);
    };

    const formData = [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Password", value: pass }
    ];

    const formValidation = (event) => {
        event.preventDefault(); // Prevent form submission
        let validationErrors = { name: "", email: "", pass: "" };

        // Validate name
        if (name === "") {
            validationErrors.name = "Please enter valid username!";
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            validationErrors.email = "Please enter valid email address!";
            // isValid = false;
        }

        // Validate password
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
        if (!passwordPattern.test(pass)) {
            validationErrors.pass = "Password must have at least 8 characters, 1 uppercase letter, 1 number, and 1 special character!";
        }

        // Update the errors state
        setErrors(validationErrors);

    };

    return (
        <div>
            <h1>FORM</h1>
            <form onSubmit={formValidation}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={hndlName} />
                {errors.name && <span className="error-message">{errors.name}</span>}<br /><br />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={hndlEmail} />
                {errors.email && <span className="error-message">{errors.email}</span>}<br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={pass} onChange={hndlPass} />
                {errors.pass && <span className="error-message">{errors.pass}</span>}<br /><br />

                <button type="submit">Submit</button>
            </form>

            <h2>Form Data</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.label}</td>
                            <td>{data.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form;
