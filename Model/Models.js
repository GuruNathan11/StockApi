var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name:{
        required : true,
        type     : String
    },
    id:{
        type     : Number
    },
    active:{
        type     : Boolean,
        default  : true
    },
    type:{
        type     : String,
        default  : "Stock"
    }
},{timestamps    : true});

Schema.path('name').validate(async (name) => {
    const nameCount = await mongoose.models.user.countDocuments({ name })
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('user',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}