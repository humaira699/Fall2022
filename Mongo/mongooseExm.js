var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/teamsdb').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
//schema
var TeamSchema = new mongoose.Schema({
    name: {type: String, required: true}
});
//model
var team = mongoose.model('team', TeamSchema, 'teams');
var team1 = new team({name: 'PSL Team 1'});
//create a document
team1.save().then((document)=>{
  console.log(document)
}).catch((err)=>{
  console.error('Failed to insert data', err);
})
 
