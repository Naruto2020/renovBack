// initialisation du server et des variables d'environnement 
const express = require("express");
const path = require('path');
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const jardinTRoutes = require("./routes/jardinTRoutes");
const salleBainSolCarRoutes = require("./routes/salleBainSolCarRoutes");
const {checkUser, requireAuth} = require("./midleware/authMidleware");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

// import fichier .env
require("dotenv").config({path:"./config/.env"});
const {mongoose} = require("./config/db");

const app = express();

// Cors
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }

app.use(cors(corsOptions));

// gestions des dossiers 
app.use("/public/",express.static(path.normalize(__dirname + '/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// securité auth jwt 
app.get("*", checkUser); // on verrifie le jetton de connexion 
app.get("/jwtid", requireAuth, (req, res) =>{ // on récuppère les infos de l'ut connecté 
    res.status(200).send(res.locals.user._id);
}); 

// routes 
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/jardinTerrasse", jardinTRoutes);
app.use("/api/salleBainSolCar", salleBainSolCarRoutes);

// server
app.listen(process.env.PORT, ()=>{
    console.log(`ecoute sur le port ${process.env.PORT}`);
});