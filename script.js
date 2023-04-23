const generatePassword = () => {
    const length = document.querySelector('#length').value;
    const uppercase = document.querySelector('#uppercase').checked;
    const lowercase = document.querySelector('#lowercase').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;

    let charset = '';

    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (lowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (numbers) {
        charset += '0123456789';
    }

    if (symbols) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.querySelector('#password').textContent = password;
};
document.querySelector('#generate').addEventListener('click', generatePassword);

