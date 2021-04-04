const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    photo : {
        type : String,
        default: "./uploads/profil/random-user.png"
    },   
    nom : {
        type: String,
        required: true,
        minlength : 3,
        maxlength : 55
    },
    prenom : {
        type: String,
        required: true,
        minlength : 3,
        maxlength : 55
    },
    username : {
        type:String,
        required: true,
        minlength : 3,
        maxlength : 55,
        unique: true,
        trim : true
    },
    password : {
        type: String,
        required: true,
        minlength : 6,
        maxlength : 1024

    },

    email : {
        type: String,
        required: true,
        lowercase:true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        trim:true
    },
 
    phone : {
        type : Number,
        //required: 'le champ coordonnees doit etre remplit',
    },

    bio : {
        type: String,
        maxlength : 1024
    },
    
    niveau:{
        type:String,
        required : 'vous devez sélectioner admin ou user ou visit',
        enum : ["admin", "user", "visit" ]    
        
    },
    followers: 
    {
        type : [String],
    },
    followings:
    {
        type:[String],
    },
    likes:
    {
        type : [String],
        //date: { type: Date, default: Date.now }
    },

    reset: String,

    resetExpires: Date,
    //date: { type: Date, default: Date.now },
    
}, {timestamps : true});


UserSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
  
UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
}

var User =  mongoose.model("User", UserSchema);
module.exports = { User };