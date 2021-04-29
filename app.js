import express from 'express';

const app = express().use(express.json());

app.get('/git-training', (req, res) => {
    res.send({ res: `Welcome to git training on Node.jds` });
});

// Let's test rebase instead of merge


// Comment 1 - e6 - try 4
// Comment 2 - e6 - try 4


// Comment 3 - master - try 4
// Comment 4 - master - try 4


app.listen(3000);
