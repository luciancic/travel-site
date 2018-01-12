const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/app/index.html');
});

app.use((req, res, next) => {
	res.send('Sorry, page not found.');
});

console.log('Server started');

app.listen(PORT);
