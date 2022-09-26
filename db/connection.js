//Documentation from : https://mongoosejs.com/docs/connections.html

const mongoose = require('mongoose');

module.exports = function connectionFactory() {
  const conn = mongoose.createConnection(process.env.MONGODB_URI);

  conn.model('User', require('../models/User'));
  conn.model('Post', require('../models/Post'));

  return conn; 
};




// const mongoose = require('mongoose')
// const conn = mongoose.createConnection(process.env.MONGODB_URI)
// conn.model('User', require('../models/User'))
// // conn.model('Post', require('../models/Post'))
// require('dotenv').config()

// // console.log(process.env.DATABASE_URL)


// // conn.model('User', require('../schemas/user'));
// // conn.model('PageView', require('../schemas/pageView'));

// module.exports = conn


// ------------------------------

// const conn = mongoose.createConnection(process.env.MONGODB_URI);
// conn.model('User', require('../schemas/user'));

// module.exports = conn;

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// .then(instance => {
//     console.log('Connected on ${instance.connections[0].name}')
// })
// .catch (err => console.log('Oops!  We got an error with this shoutout request.  Error details: ${err}'))