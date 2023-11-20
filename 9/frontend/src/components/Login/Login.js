import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from '../Inputs/InputGroup';
import InputButton from '../Buttons/InputButton';
import '../../scss/styles.scss'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
            const result = await response.json();
            console.log(result.message);
            alert("Login Successful");
            window.location.href='/'
        } else {
            console.error('Login failed');
        }
        } catch (error) {
        console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
        <Form>
            <InputGroup
            label="Email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={setEmail}
            controlId="formBasicEmail"/>

            <InputGroup
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
                controlId="formBasicPassword"/>

            <InputButton onClick={handleLogin} />
        </Form>
        </div>
    );
};

export default Login;
