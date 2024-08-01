function isLengthSufficient(password) {
  return password.length >= 8;
}

function includesDigits(password) {
  return /\d/.test(password);
}

function includesMixedCaseLetters(password) {
  return /[a-z]/.test(password) && /[A-Z]/.test(password);
}

function includesSpecialCharacters(password) {
  return /[^A-Za-z0-9]/.test(password);
}

function calculatePasswordStrength(password) {
  let strength = 0;
  
  if (isLengthSufficient(password)) {
    strength += 1;
  }
  if (includesDigits(password)) {
    strength += 1;
  }
  if (includesMixedCaseLetters(password)) {
    strength += 1;
  }
  if (includesSpecialCharacters(password)) {
    strength += 1;
  }
  
  return strength;
}

function updateStrengthMeter(password) {
  const strength = calculatePasswordStrength(password);
  const strengthMeter = document.getElementById('passwordStrengthMeter');
  const strengthFeedback = document.getElementById('passwordStrengthFeedback');
  
  strengthMeter.value = strength;
  
  let feedbackMessage = '';
  switch (strength) {
    case 0:
    case 1:
      feedbackMessage = 'Password is very weak';
      break;
    case 2:
      feedbackMessage = 'Password is weak';
      break;
    case 3:
      feedbackMessage = 'Password is strong';
      break;
    default:
      feedbackMessage = 'Password is very strong';
      break;
  }

  strengthFeedback.innerText = feedbackMessage;
}

document.getElementById('passwordInput').addEventListener('input', (e) => {
  updateStrengthMeter(e.target.value);
});