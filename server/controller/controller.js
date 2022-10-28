const storeMemory = require('../model/storeMemories');
const Users = require('../model/users');

const registration= async (req, res)=>{
  
    try {
       
        const {userEmail} = req.body;
        const checkUserIfAvaialble = await Users.findOne({userEmail});
        if(checkUserIfAvaialble != null){
            res.status(200).send({success:false,msg:"Account already exists on this email", data:null});
            return;
        }
        const result = Users.create({...req.body});
        if(result){
            res.status(200).send({success:true, msg:'user successfully registered', data:result});
        }else{
            res.status(200).send({success:false, msg:'couldnot register user', data:null});
        }
    } catch (error) {
         res.status(400).send(error.message);
    }
}

const getUsers= async (req, res)=>{
  
    try {
       
        const result = Users.find();
        if(result){
            res.status(200).send({success:true, msg:'user successfully registered', data:result});
        }else{
            res.status(200).send({success:false, msg:'couldnot register user', data:null});
        }
    } catch (error) {
         res.status(400).send(error.message);
    }
}

const getPost = async (req, res)=>{
    try{
        const result = await storeMemory.find();
        console.log(result);
        if(result){
            res.status(200).send({success:true,msg:'got All the posts successfully', data:result});
        }else{
            res.status(200).send({success:false,msg:'Could not get the posts',data:null});
        }
    }catch(error){
        res.status(400).send(error.message)
    }
}

const createPost = async (req, res)=>{
    try{
        const result = await storeMemory.create({...req.body});
        if(result){
            res.status(200).send({success:true,msg:'got All the posts successfully', data:result});
        }else{
            res.status(200).send({success:false,msg:'Could not get the posts',data:null});
        }
    }catch(error){
        res.status(400).send(error.message)
    }
}

module.exports = {
    getUsers,
    registration,
    getPost,
    createPost,
}