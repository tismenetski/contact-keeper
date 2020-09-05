const express = require('express');
const app = express();

//  Database Connection
const connectDB = require('./config/db');
connectDB();

//  Init Middleware
app.use(express.json({ extended: false })); // Accept JSON as data

//  Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//  Testing Connection
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
