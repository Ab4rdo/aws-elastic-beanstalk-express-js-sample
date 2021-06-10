const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Jebać PIS</h1><br>
	<img src="https://media1.tenor.com/images/fe51db8009bb6bd4d2480ef6afe66f35/tenor.gif?itemid=7909153">'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
