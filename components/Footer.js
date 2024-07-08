import React from 'react';

const Footer = () => {
  const githubRepoURL = process.env.REACT_APP_GITHUB_REPO_URL || 'https://github.com/yourusername/PasswordStrengthChecker';
  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || 'support@example.com';

  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0' }}>
      <p>© {new Date().getFullYear()} PasswordStrengthChecker. All rights reserved.</p>
      <a href={githubRepoURL} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <br />
      <a href={`mailto:${contactIEmail}`}>Contact Us</a>
    </footer>
  );
};

export default Footer;