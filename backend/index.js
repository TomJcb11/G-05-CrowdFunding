const express = require('express');
const app = express();
const port = 8080;

app.use(express.static("../frontend/dist/frontend"));

app.get('/', (req, res) => {
    res.sendFile("../frontend/dist/frontend/src/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});