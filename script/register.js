
async function register() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    try {

        const data = {
            username,
            password
        }
        
        const response = await axios.post('http://localhost:5500/api/users/create', data, {
            headers: {
                'Content-Type': 'application/json'
            },

            
        });
        
        
        console.log(data);
        console.log(response);

        alert('The user was created successfully!');
    }
    
    catch (err) {
        console.error(err);
        showErrorMessage(err.response.data.message);
    }


}

function showErrorMessage(message) {
    const error = document.getElementById('error');
    error.innerHTML = message;
    error.style.display = 'block';
}