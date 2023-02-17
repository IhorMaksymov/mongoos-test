const { mongoose } = require('mongoose');

const DB_HOST = 'mongodb+srv://Bonefadze:0987654321@cluster0.wt7yyxq.mongodb.net/contacts_dase?retryWrites=true&w=majority';

mongoose.connect(DB_HOST).then(() => console.log('Bimba')).catch(error => console.log(error));