const mongoose = require("mongoose");
const bcrypt =require("bcrypt");

const schema = mongoose.Schema({
    userImage:String,
    userName:String,
    userEmail: {
        type:String,
        required:true,
    },
    password:{
        type:String
    }

});

schema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password,5,function(err, hash){
        user.password = hash;
        next();
    })

})

const users = mongoose.model('user',schema);
module.exports = users;