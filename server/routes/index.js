var express = require('express');
var router = express.Router();

var data = require("../data/sample.json");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
	res.json(data);
});

/* get by loan number (path parameter: loanid) */
router.get('/data/loanid/:id', function(req, res, next) {
	const record = data.find(item => item.loan_number === req.params.id)
	record ? res.json(record) : res.status(404).json({ message: "Not found" });
});

/* 	
 *	get by an attribute (query parameter) 
 *	Assumption: The searchable attributes are first_name, last_name, email, state
 *	other attributes are ignored
 *	Server supports search by multiple attributes
 *	
*/
router.get('/data/attr', function(req, res, next) {
	const searchableAttr = ["first_name", "last_name", "email", "state"];
	
	/* filter only searchable attributes */
	const searchAttr = searchableAttr.filter(field => field in req.query)
		.reduce((acc, cur) => ({...acc, [cur]: req.query[cur]}), {});

	/* return if all search conditions are met - case insensitive */
	const results = data.filter(item => {
		for (let key in searchAttr) {
			if (searchAttr[key].toLowerCase() !== item[key].toLowerCase()) return false;
		}
		return true;
	})	

	res.json(results);
	results ? res.json(results) : res.status(404).json({ message: "Not found" });
});

module.exports = router;
