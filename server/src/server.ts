import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('List users');

    response.json([
        'Antonio',
        'Diego',
        'Tamiris', 
        'Daniel',
        'Marcos'
    ]);
});

app.listen(3333);