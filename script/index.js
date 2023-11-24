async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {

        const data = {
            username,
            password
        }

        const response = await axios.post('http://localhost:5500/api/users/login', data, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        showSuccessMessage('You have logged in successfully!');

        console.log(data);
        console.log(response);
    }

    catch (err) {
        console.log(err);
        showErrorMessage(err.response.data.message);
    }
    
}

showErrorMessage = (message) => {
    const error = document.getElementById('error');
    error.innerHTML = message;
    error.style.display = 'block';
    error.style.backgroundColor = 'lightcoral';
}

showSuccessMessage = (message) => {
    const success = document.getElementById('error');
    success.innerHTML = message;
    success.style.display = 'block';
    success.style.backgroundColor = 'lightgreen';
}

