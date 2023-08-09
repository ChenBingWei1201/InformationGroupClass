import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://JoeChen:29021788joe@cluster0.4kg7wa9.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((res) => console.log("mongo db connection created"));
