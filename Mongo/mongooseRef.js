var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/teamsdb').then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
// Define the Author model
var PlayerRefSchema = new mongoose.Schema({ 
    name: String,
    batsman: Boolean,
    bowler: Boolean
});
const PlayerM = mongoose.model('PlayerM', PlayerRefSchema);

var TeamRefSchema = new mongoose.Schema({
    Teamname: {type: String, required: true},
    Teamowner: {type: String, required: true},
    PlayerId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlayerM'
    }],
});

const TeamRefM = mongoose.model('TeamRefM', TeamRefSchema);

// //Data Player
// const playerdata= [{name: 'player 1', batsman: false, bowler: true}, {name: 'player 2', batsman: true, bowler: true}, {name: 'player 3', batsman: true, bowler: false}];
// //create a document
// PlayerM.insertMany(playerdata).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.error('Failed to insert data', err);
// })

//Data Team
var teamdoc = new TeamRefM({Teamname: 'Team 2', Teamowner: 'Owner 2', PlayerId: ['6426307e41cef8f194dd4f8f', '6426307e41cef8f194dd4f8e', '6426307e41cef8f194dd4f8d']});



//create a document
teamdoc.save().then((document)=>{
  console.log(document)
}).catch((err)=>{
  console.error('Failed to insert data', err);
})  