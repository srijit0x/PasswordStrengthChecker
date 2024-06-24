const fetch = require('node-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

async function checkPasswordStrength(password) {
  const url = `https://example-password-api.com/api/v1/strength?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error from password strength API: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to check password strength: ${error.message}`);
    throw error;
  }
}

async function fetchPasswordData(password) {
  const url = `https://example-password-api.com/api/v1/password-data?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error from password data API: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch password data: ${error.message}`);
    throw error;
  }
}

module.exports = { checkPasswordStrength, fetchPasswordData };