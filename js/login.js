document.getElementById('login-submit').addEventListener('click', function () {
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    if (userEmail == 'ijaz.hossain1@gmail.com' && userPassword == 'ijaz110106035') {
        window.location.href = 'banking.html';
    }
})