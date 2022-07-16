//jshint
const express = require('express');
const connectMongo = require('./config/db');
var cors = require('cors');

const products = require('./routes/api/products');

const app = express();

connectMongo();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/products', products);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));