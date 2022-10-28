const mongoose = require('mongoose');

const storeMemories = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdDate:{
        type:Date,
        default: new Date()
    }
});

const storeMemory = mongoose.model('memories', storeMemories);

module.exports = storeMemory;