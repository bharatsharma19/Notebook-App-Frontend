import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem("token", json.authToken)
            props.showAlert("Signed In Successfully", "success")
            history.push("/")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }

        console.log(json)
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ marginTop: "60px" }}>
            <div className="container my-2" style={{ display: "flex", width: "50vw" }}>
                <div className="container my-2">
                    <h3 className='text-center'>Sign-In to Continue</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" placeholder="Enter email" autoComplete='email' required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} placeholder="Password" autoComplete='current-password' required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-success my-3" >Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
