const { mongoose } = require('mongoose');
// qscfrtv

const { DB_HOST } = process.env;

mongoose.connect(DB_HOST).then(() => console.log('Bimba')).catch(error => console.log(error));