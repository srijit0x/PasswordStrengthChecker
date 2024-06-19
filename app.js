require('dotenv').config();

function calculatePasswordStrength(password) {
    let strength = 0;
    strength += isLengthSufficient(password);
    strength += containsUpperCase(password);
    strength += containsLowerCase(password);
    strength += containsNumber(password);
    strength += containsSpecialCharacter(password);

    return strength;
}

function isLengthSufficient(password) {
    return password.length > 8 ? 1 : 0;
}

function containsUpperCase(password) {
    return /[A-Z]/.test(password) ? 1 : 0;
}

function containsLowerCase(password) {
    return /[a-z]/.test(password) ? 1 : 0;
}

function containsNumber(password) {
    return /[0-9]/.test(password) ? 1 : 0;
}

function containsSpecialCharacter(password) {
    return /[^A-Za-z0-9]/.test(password) ? 1 : 0;
}

function updateUIWithStrength(strength) {
    const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong', 'Unbreakable'];
    const passwordStrengthDisplay = document.querySelector('#passwordStrengthDisplay');
    passwordStrengthDisplay.innerText = strengthText[strength];
    
    const colors = ['#ff4b4b', '#ff8c1a', '#ffd633', '#99e600', '#4dff4d'];
    passwordStrengthDisplay.style.color = colors[strength - 1] || '#ff4b4d';
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