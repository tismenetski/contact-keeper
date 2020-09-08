const express = require('express');
const app = express();
const path = require('path');

//  Database Connection
const connectDB = require('./config/db');
connectDB();

//  Init Middleware
app.use(express.json({ extended: false })); // Accept JSON as data

//  Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//  Serve static assests in production
if (process.env.NODE_ENV === 'production') {
  //  Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// //  Testing Connection
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
