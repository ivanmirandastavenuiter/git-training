import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    const headers = req.headers;
    res.send({ res: `Welcome to git training on Node.jds` });
});

console.log('1');
console.log('2');

app.listen(3000);