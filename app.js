import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    res.send({ res: `Welcome to git training on Node.jds` });
});

// Let's test rebase instead of merge

// Regular merge - try 1 - master
// Regular merge 2 - try 1 - master



app.listen(3000);
