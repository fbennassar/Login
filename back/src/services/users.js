const fs = require('fs');
const path = require('path');

const users_data = require('./../models/database.json');

exports.createUser = async (data) => {
    const {username, password} = data;

    const newUser = {
        username,
        password
    }

    if(users_data.find(user => user.username === username)) {
        throw new Error('User already exists');
    }

    else if(!username || !password) {
        throw new Error('Username or password is missing');
    }

    users_data.push(newUser);

        
    fs.writeFileSync(path.join(__dirname, '../models/database.json'), JSON.stringify(users_data, null, 2));

    return newUser;
}

exports.login = async (data) => {
    const {username, password} = data;

    const user = users_data.find(user => user.username === username);

    if(!user) {
        throw new Error('User not found');
    }

    if(user.password !== password) {
        throw new Error('Wrong password');
    }

    return user;
}
