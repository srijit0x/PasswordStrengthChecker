import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const submitPassword = (event) => {
        event.preventDefault();
        const apiUrl = process.env.REACT_APP_PASSWORD_API_URL;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Password strength: ${data.strength}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={submitPassword}>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="submit">Check Password Strength</button>
        </form>
    );
};

export default PasswordStrengthChecker;