const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const messageEl = document.getElementById('message');

// Character sets
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Update length display
lengthEl.addEventListener('input', (e) => {
    lengthValue.textContent = e.target.value;
});

// Generate password
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthEl.value);
    const includeLower = lowercaseEl.checked;
    const includeUpper = uppercaseEl.checked;
    const includeNumbers = numbersEl.checked;
    const includeSymbols = symbolsEl.checked;

    let chars = '';
    if (includeLower) chars += lowerChars;
    if (includeUpper) chars += upperChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    if (chars === '') {
        showMessage('Please select at least one character type!', 'error');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordEl.value = password;
    showMessage('Password generated successfully!', 'success');
});

// Copy to clipboard
copyBtn.addEventListener('click', () => {
    if (!passwordEl.value) {
        showMessage('No password to copy!', 'error');
        return;
    }

    navigator.clipboard.writeText(passwordEl.value)
        .then(() => showMessage('Copied to clipboard!', 'success'))
        .catch(() => showMessage('Failed to copy!', 'error'));
});

// Show status messages
function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.style.color = type === 'error' ? '#e74c3c' : '#2ecc71';
    setTimeout(() => messageEl.textContent = '', 2000);
}