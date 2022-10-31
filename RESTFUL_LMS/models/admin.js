var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adminSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Admin',adminSchema);
