const loginForm = document.querySelector('#loginForm');

const loginFormHandler = async (event) => {

    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

        console.log(email + password);
        if (email && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log("login successful");
                document.location.replace('/');
            } else {
                alert('Failed to login');
            }
        }
};

loginForm.addEventListener("submit", loginFormHandler);