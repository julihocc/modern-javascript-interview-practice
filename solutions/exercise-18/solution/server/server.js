const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS


// Simple in-memory data store
let users = [
    { id: 1, name: 'Jim', email: 'jim@dd.com', phone: '123-456-7890' },
    { id: 2, name: 'Pam', email: 'pam@dd.com', phone: '098-765-4321' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        res.status(404).send('User not found');
    } else {
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;
        res.json(updatedUser);
    }
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        res.status(404).send('User not found');
    } else {
        users = users.filter(user => user.id !== id);
        res.json({ message: 'User deleted successfully' });
    }
});

app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
