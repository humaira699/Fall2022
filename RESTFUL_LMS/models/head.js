var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var headSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Head', headSchema);
