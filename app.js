require('dotenv').config();

function calculatePasswordStrength(password) {
    try {
        let strength = 0;
        strength += isLengthSufficient(password);
        strength += containsUpperCase(password);
        strength += containsLowerCase(password);
        strength += containsNumber(password);
        strength += containsSpecialCharacter(password);

        return strength;
    } catch (error) {
        console.error("Error calculating password strength:", error);
        return 0;
    }
}

function isLengthSufficient(password) {
    try {
        return password.length > 8 ? 1 : 0;
    } catch (error) {
        console.error("Error checking password length:", error);
        return 0;
    }
}

function containsUpperCase(password) {
    try {
        return /[A-Z]/.test(password) ? 1 : 0;
    } catch (error) {
        console.error("Error checking for uppercase letters:", error);
        return 0;
    }
}

function containsLowerCase(password) {
    try {
        return /[a-z]/.test(password) ? 1 : 0;
    } catch (error) {
        console.error("Error checking for lowercase letters:", error);
        return 0;
    }
}

function containsNumber(password) {
    try {
        return /[0-9]/.test(password) ? 1 : 0;
    } catch (error) {
        console.error("Error checking for numbers:", error);
        return 0;
    }
}

function containsSpecialCharacter(password) {
    try {
        return /[^A-Za-z0-9]/.test(password) ? 1 : 0;
    } catch (error) {
        console.error("Error checking for special characters:", error);
        return 0;
    }
}

function updateUIWithStrength(strength) {
    try {
        const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong', 'Unbreakable'];
        const passwordStrengthDisplay = document.querySelector('#passwordStrengthDisplay');
        if (!passwordStrengthDisplay) {
            console.error('Password strength display element not found');
            return;
        }
        passwordStrengthDisplay.innerText = strengthText[strength];
    
        const colors = ['#ff4b4b', '#ff8c1a', '#ffd633', '#99e600', '#4dff4d'];
        passwordStrengthEventEmitter.removeAllListeners('readable');
        passwordStrengthDisplay.style.color = colors[strength - 1] || '#ff4b4d';
    } catch (error) {
        console.error("Error updating UI with password strength:", error);
    }
}

function handlePasswordInput() {
    try {
        const passwordInput = document.querySelector('#passwordInput');
        if (!passwordInput) {
            console.error('Password input element not found');
            return;
        }
        passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        updateUIWithStrength(strength);
    });
    } catch (error) {
        console.error("Error handling password input:", error);
    }
}

function init() {
    handlePasswordInput();
}

document.addEventListener('DOMContentLoaded', init);