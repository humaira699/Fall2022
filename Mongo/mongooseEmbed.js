var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/teamsdb').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
// schema
var Player = new mongoose.Schema({ 
    name: String,
    batsman: Boolean,
    bowler: Boolean
});

var TeamSchema = new mongoose.Schema({
    Teamname: {type: String, required: true},
    Teamowner: {type: String, required: true},
    Players: [Player]
});
//model
var team = mongoose.model('team', TeamSchema, 'teams');
var teamdoc = new team({Teamname: 'Team 1', Teamowner: 'Owner 1', Players: [{name: 'player 1', batsman: true, bowler: false}]});
//create a document
teamdoc.save().then((document)=>{
  console.log(document)
}).catch((err)=>{
  console.error('Failed to insert data', err);
})