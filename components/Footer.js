import React, { useMemo } from 'react';

const Footer = () => {
  const githubRepoURL = process.env.REACT_APP_GITHUB_REPO_URL || 'https://github.com/yourusername/PasswordStrengthChecker';
  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || 'support@example.com';

  // Memoizing the current year to avoid recalculating on every render.
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0' }}>
      <p>© {currentYear} PasswordStrengthChecker. All rights reserved.</p>
      <a href={githubRepoURL} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <br />
      <a href={`mailto:${contactEmail}`}>Contact Us</a>
    </footer>
  );
};

export default Footer;