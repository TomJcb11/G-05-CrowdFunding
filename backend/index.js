const express = require('express');
const app = express();
const port = 8080;

app.use(express.static("/Users/alex/Documents/GitHub/G-05-CrowdFunding/frontend/dist/frontend"));

app.get('/', (req, res) => {
    res.sendFile("/Users/alex/Documents/GitHub/G-05-CrowdFunding/frontend/dist/frontend/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});