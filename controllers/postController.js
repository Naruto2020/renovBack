// import PostrSchema
const {Post} = require("../models/post");
const {User} = require("../models/user");

// import du fichier Errors 
const {uploadErrors} = require("../utils/errorUtils");

// import de l'objetId de mongoose
const ObjetId = require("mongoose").Types.ObjectId;

// initialisation de la création des fichiers 
const fs = require("fs");
const {promisify} = require("util");
const pipeline = promisify(require("stream").pipeline);


// create posts 
module.exports.createPost = async (req, res) =>{
    let fileName;
    
    if(req.file !== null){
        try{
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg"
            ){
                throw Error("invalid file");
            }
    
            if (req.file.size > 500000){
                throw Error("max size");
            }
        } catch(err){
            const errors = uploadErrors(err);
            return res.status(201).json({ errors });
        }
    
        // on sauvegarde les photo de profil sous un meme nom pour éviter un surstockage de phot ut
        fileName = req.body.posterId + Date.now() + ".jpg";
    
        // ceation et stockage du fichier static
        await pipeline(
            req.file.stream,
            fs.createWriteStream(
              `${__dirname}/../client/public/uploads/post/${fileName}`
            )
        );

    }

    const newPost = new Post({
        posterId: req.body.posterId,
        message: req.body.message,
        photo: req.file !== null ? "./uploads/post/" + fileName : "",
        video: req.body.video,
        likers: [],
        comments: [],
    });
    try{
        const post = await newPost.save();
        return res.status(201).json(post); 
    }catch(err){
        return res.status(404).send(err);
    }
};


// read and display posts 
module.exports.readPost =  (req, res) =>{
    Post.find((err, docs)=>{
        if(!err)
          res.send(docs)
        else{
            console.log("erreur de transmission de la liste des postes : " + err);
        }  
    }).sort({createAt:-1});
};

// update post 
module.exports.updatePost =  (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);

    let newPost =  { 
        message: req.body.message,
        //photo: req.file !== null ? "./uploads/posts/" + fileName : "",
        video: req.body.video
    };  

    Post.findByIdAndUpdate(
        req.params.id,
        {$set:newPost},
        {new:true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) =>{
            if(!err){
                return res.send(docs);
            }else{
                return res.status(500).send({message: "erreur lors de la mise a jour du post"});
            }
        }
    );

};
// delete post 
module.exports.deletePost =  (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);

    Post.findByIdAndDelete(
        req.params.id,
        (err, docs) =>{
            if(!err){
                return res.send(docs);
            }else{
                return res.status(500).send({message : "erreur lors de la suppression du post"});
            }
        }
    );  

};

// like post 
module.exports.likePost = async (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);

    try{
        await Post.findByIdAndUpdate(
            req.params.id,
            {$addToSet : {likers : req.body.idWhoLike}},
            {new : true},
            (err, docs)=>{
                if(err){
                    return res.status(500).send({message : "erreur lors de l'ajout dans la liste likers"});
                }
            }
        );
        await User.findByIdAndUpdate(
            req.body.idWhoLike,
            {$addToSet : {likes : req.params.id}},
            {new : true},
            (err, docs) =>{
                if(!err){
                    res.send(docs);
                }else{
                    return res.status(500).send({message : "erreur lors de l'ajout dans la liste likes"});
                }
            }
        );

    }catch(err){
        return res.status(400).send(err);
    }  
};

// unlike post 
module.exports.unlikePost = async (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);
    
    try{
        await Post.findByIdAndUpdate(
            req.params.id,
            {$pull : {likers : req.body.idWhoLike}},
            {new : true},
            (err, docs)=>{
                if(err){
                    return res.status(500).send({message : "erreur lors du retrais de la liste likers"});
                }
            }
        ); 
        
        await User.findByIdAndUpdate(
            req.body.idWhoLike,
            {$pull : {likes : req.params.id}},
            {new : true},
            (err, docs) =>{
                if(!err){
                    return res.send(docs);
                }else{
                    return res.status(500).send({message : "erreur lors du retrais de la liste likes"});
                }
            }
        );

    }catch(err){
        return res.status(400).send(err);
    }  

};

// add comments
module.exports.postComment =  (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);

    try{
        Post.findByIdAndUpdate(
            req.params.id,
            {
                $push : {
                    comments:{
                        commenterId : req.body.commenterId,
                        commenterPseudo : req.body.commenterPseudo,
                        text: req.body.text,
                        timestamp: Date.now(),
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err){
                    return res.send(docs);
                }else{
                    return res.status(500).send({message : "erreur lors de l'ajout du comment"});
                }
            }
        );

    }catch(err){
        return res.status(400).send(err);
    }  
};

// add comments
module.exports.deleteComment =  (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id incorrecte ${req.params.id}`);

    try{
        Post.findByIdAndUpdate(
            req.params.id,
            {
                $pull : {
                    comments:{
                        _id : req.body.commentId
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err){
                    return res.send(docs);
                }else{
                    return res.status(500).send({message : "erreur lors de retrais du comment"});
                }
            }
        );   

    } catch(err){
        return res.status(400).send(err);
    } 
};