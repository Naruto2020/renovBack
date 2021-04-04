// initialisation de la BDD
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
    posterId: {
        type: String,
        require: true
    },
    message : {
        type: String,
        trim: true,
        maxlength: 500,
    },
    comments : {
        type:[
            {
                commenterId:String,
                commenterPseudo: String,
                text: String,
                timestamp: Number,
            }
        ],
        required: true
    },
    likers: {
        type: [String],
        required: true,
    },
    photo: {
        type: String,
      },
      video: {
        type: String,
      },
}, 
{
    timestamps: true
}
);

var Post =  mongoose.model("Post", PostSchema);
module.exports = { Post };