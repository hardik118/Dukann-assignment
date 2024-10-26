global.fetch= require('node-fetch');
const config= require("universal-config");
const Unsplash= require("unsplash-js").createApi;
const toJson=require("unsplash-js").toJson;
const express= require("express");
const server = require('./config/server');

const app= express();
const PORT= process.env.PORT || 5000 ;

const unsplash = Unsplash({
    accessKey: config.get("APPLICATION_ID"), // Use accessKey
    secret: config.get("SECRET"),
    callbackUrl: config.get("CALLBACK_URL")
});


app.get("/api/photos", async (req, res)=>{

    unsplash.photos.list({ page: req.query.count, perPage: req.query.limit }) // Use the correct method
    .then(toJson)
    .then(json => res.json(json))
    .catch(error => {
        console.error('Error fetching photos:', error);
        res.status(500).json({ error: 'Failed to fetch photos' });
    });

})


app.listen(PORT, ()=>{
   
    console.log(`the serve is started ${PORT}`);
})