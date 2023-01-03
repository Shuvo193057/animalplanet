const express = require('express');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const fs = require("fs-extra");
const multer = require("multer");
const path = require('path');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

const username = process.env.uname;
const password = process.env.password;
console.log(username)
console.log(password)

const url = "mongodb+srv://"+username+":"+password+"@cluster0.n4dgkrq.mongodb.net/?retryWrites=true&w=majority";
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("animalplanet");
    dbo.collection("training").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        app.get('/trainning',(req,res)=>{
            res.send(result)
        })
        db.close();
    });
});

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("food");
//     dbo.collection("food").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         // console.log(result);
//         app.get('/food',(req,res)=>{
//             res.send(result)
//         })
//         db.close();
//     });
// });


// const Storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./uploads/');
//     },
//     filename:(req,file,cb)=>{
//         const fileExt = path.extname(file.originalname);
//         const fileName = file.originalname
//                                 .replace(fileExt,"")
//                                 .toLowerCase()
//                                 .split(" ")
//                                 .join("-") + '-' + Date.now();
//         if(fileExt == '.jpeg' || fileExt == '.png' || fileExt == ".jpg" || fileExt == ".webp" ){
//             cb(null,fileName+fileExt);
//         }else{
//             cb(null,fileName+'.jpg');
//         }
        
//     }
// })
// const upload = multer({
//     storage:Storage, //this is the actual destination of file in local storage
//     fileFilter:(req,file,cb)=>{
//         // console.log(file);
//         if(
//             file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/webp'
//         ){
//             cb(null,true);
//         }else{
//             cb(new Error('only .png, .jpg, .jpeg .webp formet allowed!'))
//         }
//     }
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("");
//     app.post('/',upload.single("file"), (req, ress) => {
//             const page_info = req.body;
//             const country_img = req.file;
//             //console.log(country_img);
//             if (typeof country_img == 'undefined') {
//                 var finalImg = {}
//               }
//             else{
//                 const newImg = fs.readFileSync('./uploads/'+country_img.filename);
//                 const encImg = newImg.toString('base64');
//                 var finalImg={
//                  name:country_img.filename,
//                  contentType: country_img.mimetype,
//                  size: country_img.size,
//                  image: Buffer(encImg,"base64")
//                 };
//             }
//                 var myobj = {
//                     c_name: country_info.name,
//                     level: country_info.level,
//                     quote: country_info.quote,
//                     imageinfo:finalImg
//                  };
//             console.log(myobj);
//             dbo.collection("country_information").insertOne(myobj, function(err, res) {
//             if (err) throw err;
//             // db.close();
//             db.on('close', function () {
//                 console.log('Error...close');
//               });
//             console.log("1 document inserted");
//             if (typeof country_img != 'undefined') {
//                     fs.unlink('./uploads/'+country_img.filename,function(err){
//                     if(err) return console.log(err);
//                     console.log('file deleted successfully');
//                 }); 
//               }
//             ress.sendFile(__dirname+'/index.html');
//         })
//     })
    
// });

app.listen(5000);