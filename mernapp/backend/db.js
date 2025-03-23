const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://awantikasah13:Awantika33@cluster0.wylta.mongodb.net/';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // this option helps avoid deprecation warnings
    });
    console.log("connected to mongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function (err,data){
        if (err) console.log(err);
        else console.log(data);
         
    })
  } catch (err) {
    console.log("Error connecting to MongoDB: ", err);

  }
};

module.exports = mongoDB;
