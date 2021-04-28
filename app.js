import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    res.send({ res: `Welcome to git training on Node.jds` });
});

app.listen(3000);