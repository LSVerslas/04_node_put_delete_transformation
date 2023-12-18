const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = 3000'

const users = 
    { id: 1, name: 'Serbentautas', town: 'Vilnius', isDeleted: false },
    { id: 2, name: 'Lenteja', town: 'Kaunas', isDeleted: false },
    { id: 3, name: 'James', town: 'London', isDeleted: false },
  ;

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

