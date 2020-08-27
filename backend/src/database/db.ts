import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://localhost:8081/',
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
