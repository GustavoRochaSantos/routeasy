import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://localhost:27017/routeasy',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  err => {
    if (err) {
      console.log('Some error occurred while connecting to the db');
    } else {
      console.log('Db connected Successfully');
    }
  },
);
