const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
    console.log('Running Mongo')
  })
  
  mongoose.connection.on('error', () => {
    console.log('Error to connect');
  })

return conn().catch(err => console.log(err));

async function conn() {
  await mongoose.connect('mongodb://localhost:27017/parking');
}


