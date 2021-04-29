import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    res.send({ res: `Welcome to git training on Node.jds` });
});

// Let's test rebase instead of merge

// Regular merge - try 1 - e6
// Regular merge 2 - try 1 - e6



app.listen(3000);
