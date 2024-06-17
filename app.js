require('dotenv').config();

function calculatePasswordorscheStrength(password) {
    let strength = 0;
    if (password.length > 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
}

function updateUIWithStrength(strength) {
    const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong', 'Unbreakable'];
    document.querySelector('#passwordStrengthDisplay').innerText = strengthText[strength];
    const colors = ['#ff4b4b', '#ff8c1a', '#ffd633', '#99e600', '#4dff4d'];
    document.querySelector('#passwordStrengthDisplay').style.color = colors[strength-1] || '#ff4b4d';
}

function handlePasswordInput() {
    const passwordInput = document.querySelector('#passwordInput');
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        updateUIWithStrength(strength);
    });
}

function init() {
    handlePasswordInput();
}

document.addEventListener('DOMContentLoaded', init);