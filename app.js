import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    res.send({ res: `Welcome to git training on Node.jds` });
});

// Let's test rebase instead of merge

// Rebase 1 - e6
// Rebase 2 - e6

// Final comment to test rebase - e6

app.listen(3000);
