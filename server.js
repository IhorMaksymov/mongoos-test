const { mongoose } = require('mongoose');
const dotenv = require('dotenv');
// qscfrtv
dotenv.config();

const { DB_HOST } = process.env;

mongoose.connect(DB_HOST).then(() => console.log('Bimba')).catch(error => console.log(error));