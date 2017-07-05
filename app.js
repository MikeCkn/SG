let express = require('express');
let app = express();

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/coaching', (req, res) => {
	//res.render('coaching');
});

app.listen(8080, () => {
	console.log('app listening on port 8080!');
});

