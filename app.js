const { json } = require('express');
const express = require('express');
const app = express();
app.use(json());

app.get('/git-training', (req, res) => {
    res.send( `Welcome to git training on Node.js`);
});

app.listen(3000);