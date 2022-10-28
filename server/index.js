const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const router = require('./routes/route');
const fileUpload= require('express-fileupload');

const path = require('path');
const databaseConnection = require('./database/connection');
dotenv.config({path:'config.env'})
databaseConnection();

const PORT = process.env.PORT || 8080;



app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors({
    origin: "*",
    credentials: true
}));
app.use('/', router);

app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{
    console.log(`Listening port Number ${PORT}`);
});


