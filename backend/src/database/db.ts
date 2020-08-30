/**
 * Conecta no banco mongodb
 */

import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://localhost:27017/routeasy',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  err => {
    if (err) {
      console.error('\x1b[31m%s\x1b[30m', 'Some error occurred while connecting to the db');
    } else {
      console.log('\x1b[32m%s\x1b[30m', 'DB running on: http://localhost:27017/routeasy');
    }
  },
);
