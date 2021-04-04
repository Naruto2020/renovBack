// import UserSchema
const {User} = require("../models/user");
const jwt = require("jsonwebtoken");
// import du fichier Errors 
const {signUpErrors, signInErrors} = require("../utils/errorUtils");

// initialisation de la durée du token 
const maxlife = 3 * 24 * 60 * 60 * 1000; // en milisecondeequivaut à 03 jours 
const createToken = (id)=>{
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn : maxlife,

    });
}
// inscription
module.exports.signUp = async (req, res)=>{
    const  { nom , prenom, username, email, password, niveau} = req.body;
    
    try{
        const newUser = await  User.create({ nom , prenom, username, email, password, niveau});
        // enregistrement du profil 
        res.status(200).json({newUser:newUser._id});
    }catch(err){
        const errors = signUpErrors(err);
        res.status(200).send({errors});
    }
}

// gestion de la connexion et Auth 
module.exports.signIn = async (req, res) =>{
    const {email, password} = req.body;
    try{
        // check if user exist with those email and password 
        const user = await User.login(email, password);
        // create token with user id 
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, sameSite:true, maxlife});
        res.status(200).json({ user: user._id});
    }catch(err){
        const errors = signInErrors(err);
        res.status(200).json({errors});
    }

}

// gestion des déconnexions 
module.exports.logout =  (req, res) =>{
    res.cookie('jwt', '', {maxlife:1});
    res.redirect("/");
}