import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = credentials;

        const response = await fetch("http://localhost:3001/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            history.push("/")
            props.showAlert("Account created Successfully", "success")
        }
        else {
            props.showAlert("User Already exists with this Email Address", "danger")
        }

        console.log(json)
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ marginTop: "60px" }}>
            <div className="container">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" className="form-control" id="text" name='name' onChange={onChange} aria-describedby="text" placeholder="Enter your Name" minLength={3} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={onChange} placeholder="Password" minLength={7} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} placeholder="Password" minLength={7} required />
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3" >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
