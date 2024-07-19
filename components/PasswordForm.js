import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
    const [inputPassword, setInputPassword] = useState('');

    const handleInputPasswordChange = (event) => {
        setInputPassword(event.target.value);
    };

    const handlePasswordStrengthCheck = (event) => {
        event.preventDefault();
        const passwordStrengthApiUrl = process.env.REACT_APP_PASSWORD_API_URL;

        fetch(passwordStrengthApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: inputPassword }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Password strength: ${data.strength}`);
        })
        .catch(error => {
            console.error('Password Strength Check Error:', error);
        });
    };

    return (
        <form onSubmit={handlePasswordStrengthCheck}>
            <label htmlFor="passwordInput">Password:</label>
            <input
                type="password"
                id="passwordInput"
                name="passwordInput"
                value={inputPassword}
                onChange={handleInputPasswordChange}
            />
            <button type="submit">Check Password Strength</button>
        </form>
    );
};

export default PasswordStrengthChecker;