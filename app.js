let express = require('express');
let app = express();
let request = require('request');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/sg', (req, res) => {
	res.render('sg');
});

app.get('/shop', (req, res) => {
	res.render('shop');
});

let option = {
  url: 'https://socgen-k-api.openbankproject.com/my/logins/direct',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'DirectLogin username="1000203919",password="111111111111111111",consumer_key="5px4st3cjf4zhrejol1iutp3mip00u00h5cd0zpr"'
  }
};

let option2 = {
	url : 'https://socgen-k-api.openbankproject.com/obp/v3.0.0/banks/00100/products',
	headers : {
	'Content-Type': 'application/json',
    'Authorization': 'DirectLogin token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIiOiIifQ.k1BS1r0pZuAvvFtQHrndABOJTIG0Q6jKNBCW8xwJQGE"'
	}
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      var token = body;
      console.log(token)
	}
}

function callback2(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body)
	}
}

request.post(option, callback);
request.get(option2, callback2);

app.get('/coaching', (req, res) => {
	//res.render('coaching');
});

app.listen(8080, () => {
	console.log('app listening on port 8080!');
});