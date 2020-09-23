const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const posts = require('./routes/api/posts.js');

const app = express();

//DB CONFIG
const db = require('./config/keys.js').mongoURI;

//Connect to mongodb through mongoose
mongoose 
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

///Routing in Node
app.get('/api/users', users);
app.get('/api/profile', profile);
app.get('/api/posts', posts);

// when deploying on heroku or locally
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));