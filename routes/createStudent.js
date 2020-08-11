const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
	app.post('/students/new', requireLogin, (req, res) => {
		res.send('successful login');
	});
};
