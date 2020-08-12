const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

require('./models/User');
require('./models/Students');
require('./services/passport');

const keys = require('./config/keys');

app.use(express.json());

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// require('./routes/students')(app);

app.use('/api/students', require('./routes/students'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT);
