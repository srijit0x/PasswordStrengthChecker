function calculatePasswordStrength(password) {
  let strength = 0;
  
  if (password.length >= 8) {
    strength += 1;
  }

  if (/\d/.test(password)) {
    strength += 1;
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    strength += 1;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
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