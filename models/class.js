var mongoose = require('mongoose');
const teacher = require('./teacher');
var Schema = mongoose.Schema;
var classSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    teacher:{
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'        
    },
    students:{
        type: [{
            id:{
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }
        }]
    }        
});
module.exports = mongoose.model('Class', classSchema);
