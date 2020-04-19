const express = require('express');
const app = express();
const port = 3001;
var path = require('path');

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/flappy_bird/game.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
