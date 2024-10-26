const express = require("express")
const fileupload= require("express-fileupload");
const cors = require("cors");

const app= express();
app.use(fileupload());
app.use(cors());



app.post('/upload', async  ( req, res)=>{
    if(req.files==null){
        return res.status(401).json({
            msg :" cannot  find the  file you  have tried submitting "
        })
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err=>{
        if(err){
            console.error(err);
            return res.status(500).json({msg:"the req, could not be processed"});

        }
       

        })

        res.json({
            Filename:file.name,
        Filepath: `/uploads/${file.name}`
    });


})

app.listen(5000, ()=>{
    console.log("the db is runnign")
})
