var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

// var User = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password:  {
//         type: String,
//         required: true
//     },
//     admin:   {
//         type: Boolean,
//         default: false
//     }
// });
//end::::::::::::::::::::
// var User = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password:  {
//         type: String,
//         required: true
//     }
// });

//uncomment for passport use
var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose);//registers a plugin for this schema
//end uncomment

module.exports = mongoose.model('User', User);