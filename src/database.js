import mongoose from 'mongoose';

const URI = 'http://localhost:27017/';

let options = {};

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
        .connect(URI, options)
        .then(() => console.log('DB is Up!'))
        .catch((err) => console.log(err));