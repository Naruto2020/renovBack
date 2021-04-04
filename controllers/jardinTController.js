const {Post} = require("../models/post");
const {User} = require("../models/user");
const {JardinTrasse} = require("../models/jardinTrasse");

// initialisation de la création des fichiers 
const fs = require("fs");
const {promisify} = require("util");
const pipeline = promisify(require("stream").pipeline);

// import de l'objetId de mongoose
const ObjetId = require("mongoose").Types.ObjectId;
const { text } = require("body-parser");
const { articlesErrors} = require("../utils/errorUtils");


// CRUD JardinTerrasse 

// create JardinTerrasse
module.exports.createJardinT = async (req,res) =>{

    const newJardinT = new JardinTrasse({
        userId : req.body.userId,
        abriCloPGBV : req.body.abriCloPGBV,
        portailMotoPPGB : req.body.portailMotoPPGB,
        terrasseEtSolExterieure : req.body.terrasseEtSolExterieure,
        luminaireEClairageExt:  req.body.luminaireEClairageExt, 
        meubleCuisine:  req.body.meubleCuisine, 
        cuisienCompleteEtkitchenette:  req.body.cuisienCompleteEtkitchenette,
        evierEtRobinetCuisine:  req.body.evierEtRobinetCuisine, 
        planTravailCredenceFondHotte:  req.body.planTravailCredenceFondHotte, 
        electroMenager:  req.body.electroMenager,  

    });
    try{
        const jardinT = await newJardinT.save();
        return res.status(200).json(jardinT);
    }catch(err){
        return res.status(404).send(err);
    };
};

// add jardinTerrasse & cuisineElec articles

module.exports.postAbriCloPGBV = async (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
    return res.status(400).send(`Id incorrecte ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                        
                        
                $push:{
                    abriCloPGBV:{
                        //photo: req.file !== null ? "./uploads/articles/" + fileName : "",
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }   
                
            },
            {new : true},
            (err, docs) =>{
                if(!err){
                    return res.send(docs);
                }else{
                    return res.status(500).send({message:`erreur lors de l'ajout de larticle `})
                }
            }
        );
    }catch(err){
        const errors = articlesErrors(err); 
        res.status(201).send({errors});
    }    
};

module.exports.postPortailMotoPPGB = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
        return res.status(400).send(`Id Invalide ${req.params.id}`);
    
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    portailMotoPPGB:{
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe               
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err){
                    return res.send(docs);
                }else{
                    return res.status(500).send({message : `erreur lors de l'ajout de l'article`});
                }
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }    
}

module.exports.postTerrasseEtSolExterieure = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push : {
                    terrasseEtSolExterieure : {
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe 
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                else
                  return res.status(500).send({message : `erreur lors de l'ajout de l'article `});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postLuminaireEClairageExt = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id Invalid ${req.params.id}`);
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push : {
                    luminaireEClairageExt: {
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                else
                  return res.status(500).send({message : `erreur lors de l'ajout de l'article `});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postMeubleCuisine = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id Invalid ${req.params.id}`);
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push : {
                    meubleCuisine: {
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                else
                  return res.status(500).send({message : `erreur lors de l'ajout de l'article `});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postCuisineCompleteKitchenette = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    cuisineCompleteKitchenette:{
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : ` erreur lors de l'ajout de l'article `});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postEvierEtRobinetCuisine = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    evierEtRobinetCuisine:{
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: ` erreur lors de l'ajout de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postPlanTravailCredenceFondHotte = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    planTravailCredenceFondHotte:{
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : ` erreur lors de l'ajout de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.postElectroMenager = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    electroMenager:{
                        photo: req.body.photo,
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new :true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : ` erreur lors de l'ajout de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};


// Edit JardinTerrasse , CuisineElectromenager articles
module.exports.editAbriCloPGBV = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);
    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs) =>{
                // on pointe l'article à modifier 
                const theAbriCloPGBV = docs.abriCloPGBV.find((abriCPGBV) =>
                    abriCPGBV._id.equals(req.body.abriCloPGBVId)
                );

                //console.log(theAbriCloPGBV);
                if(!theAbriCloPGBV)
                   return res.status(400).send(`article introuvable`);
                   // on update l'article
                theAbriCloPGBV.nom = req.body.nom;
                theAbriCloPGBV.enseigne = req.body.enseigne;
                theAbriCloPGBV.prix = req.body.prix;
                theAbriCloPGBV.describe = req.body.describe;

                // on sauvegarde 
                return docs.save((err)=>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(500).send(err);   
                });

            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editPortailMotoPPGB = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs) =>{
                const thePortailMotoPPGB = docs.portailMotoPPGB.find((portailMPPGB)=>
                    portailMPPGB._id.equals(req.body.portailMotoPPGBId)
                );

                if(!thePortailMotoPPGB)
                   return res.status(400).send(`article introuvable`);
                thePortailMotoPPGB.nom = req.body.nom;
                thePortailMotoPPGB.enseigne = req.body.enseigne;
                thePortailMotoPPGB.prix = req.body.prix;
                thePortailMotoPPGB.describe = req.body.describe; 
                
                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(500).send(err);   
                });
            }
        );
    }catch(err){        
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editTerrasseEtSolExterieure= (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalid ${req.params.id}`);
    
    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theTerrasseEtSolExterieure = docs.terrasseEtSolExterieure.find((terrasseEtSE)=>
                   terrasseEtSE._id.equals(req.body.terrasseEtSolExterieureId)
                );

                if(!theTerrasseEtSolExterieure)
                   return res.status(400).send(`article introuvable`);
                theTerrasseEtSolExterieure.nom = req.body.nom;
                theTerrasseEtSolExterieure.enseigne = req.body.enseigne;
                theTerrasseEtSolExterieure.prix = req.body.prix;
                theTerrasseEtSolExterieure.describe = req.body.describe; 

                return docs.save((err)=>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editLuminaireEClairageExt = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);
    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theLuminaireEClairageExt = docs.luminaireEClairageExt.find((luminaireEE)=>
                    luminaireEE._id.equals(req.body.luminaireEClairageExtId)
                );

                if(!theLuminaireEClairageExt)
                   return res.status(400).send(`article introuvable`);
                theLuminaireEClairageExt.nom = req.body.nom;
                theLuminaireEClairageExt.enseigne = req.body.enseigne;
                theLuminaireEClairageExt.prix = req.body.prix;
                theLuminaireEClairageExt.describe = req.body.describe;
                
                return docs.save((err)=>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(500).send(err);   
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editMeubleCuisine = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theMeubleCuisine = docs.meubleCuisine.find((meubleCui)=>
                   meubleCui._id.equals(req.body.meubleCuisineId)
                );

                if(!theMeubleCuisine)
                  res.status(400).send(`Article non trouvé `);

                theMeubleCuisine.nom = req.body.nom;  
                theMeubleCuisine.enseigne = req.body.enseigne;  
                theMeubleCuisine.prix = req.body.prix;  
                theMeubleCuisine.describe = req.body.describe;  

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);

                    return res.status(500).send(err);   
                });
            }

        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editCuisineCompleteKitchenette = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theCuisineCompleteKitchenette = docs.cuisineCompleteKitchenette.find((cuisineCk)=>
                   cuisineCk._id.equals(req.body.cuisineCompleteKitchenetteId)
                );

                if(!theCuisineCompleteKitchenette)
                   return res.status(400).send(`Article introuvable`);
                theCuisineCompleteKitchenette.nom = req.body.nom;   
                theCuisineCompleteKitchenette.enseigne = req.body.enseigne;   
                theCuisineCompleteKitchenette.prix = req.body.prix;   
                theCuisineCompleteKitchenette.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(400).send(err);   
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editEvierEtRobinetCuisine = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theEvierEtRobinetCuisine = docs.evierEtRobinetCuisine.find((evierEtRC)=>
                   evierEtRC._id.equals(req.body.evierEtRobinetCuisineId)
                );

                if(!theEvierEtRobinetCuisine)
                   return res.status(400).send(`Article introuvable`);
                theEvierEtRobinetCuisine.nom = req.body.nom;   
                theEvierEtRobinetCuisine.enseigne = req.body.enseigne;   
                theEvierEtRobinetCuisine.prix = req.body.prix;   
                theEvierEtRobinetCuisine.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(400).send(err);   
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};


module.exports.editPlanTravailCredenceFondHotte = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const thePlanTravailCredenceFondHotte = docs.planTravailCredenceFondHotte.find((planTravailCFH)=>
                   planTravailCFH._id.equals(req.body.planTravailCredenceFondHotteId)
                );

                if(!thePlanTravailCredenceFondHotte)
                   return res.status(400).send(` Article introuvable`);
                thePlanTravailCredenceFondHotte.nom = req.body.nom;   
                thePlanTravailCredenceFondHotte.enseigne = req.body.enseigne;   
                thePlanTravailCredenceFondHotte.prix = req.body.prix;   
                thePlanTravailCredenceFondHotte.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(500).send(err);   
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

module.exports.editElectroMenager = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        return JardinTrasse.findById(
            req.params.id,
            (err, docs)=>{
                const theElectroMenager = docs.electroMenager.find((electroM)=> 
                   electroM._id.equals(req.body.electroMenagerId)
                );

                if(!theElectroMenager)
                   return res.status(400).send(` Article introuvable`);
                theElectroMenager.nom = req.body.nom;   
                theElectroMenager.enseigne = req.body.enseigne;   
                theElectroMenager.prix = req.body.prix;   
                theElectroMenager.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(400).send(err);   
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err)
        res.status(200).send({errors});
    }   
};

// delete JardinTerrasse articles

module.exports.deleteJardinT = (req, res) =>{
    if(!ObjetId.isValid(req,params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);
    
    try{
    JardinTrasse.findByIdAndDelete(
        req.params.id,
        (err, docs) =>{
            if(!err)
                return res.send(docs);
            return res.status(500).send({message : `erreur lors de la suppression de l'article `});   
        },
    );
    }catch(err){
        return res.status(400).send(err);
    }
};

module.exports.deleteAbriCloPGBV = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    abriCloPGBV:{
                        _id: req.body.abriCloPGBVId
                    }
                }
            },
            {new: true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                else
                   return res.status(500).send({message : `erreur lors de retrais de l'article`})   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deletePortailMotoPPGB = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    portailMotoPPGB:{
                        _id: req.body.portailMotoPPGBId
                    }
                }
            },
            {new: true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                else
                   return res.status(500).send({message: `erreur lors de retrais de l'article`}); 
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteTerrasseEtSolExterieure = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    terrasseEtSolExterieure:{
                        _id: req.body.terrasseEtSolExterieureId
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: `erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteLuminaireEClairageExt = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);
    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    luminaireEClairageExt:{
                        _id: req.body.luminaireEClairageExtId
                    }
                }
            },
            {new: true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : `erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteMeubleCuisine = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    meubleCuisine:{
                        _id : req.body.meubleCuisineId
                    }
                }
            },
            {new: true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : `erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteCuisineCompleteKitchenette = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    cuisineCompleteKitchenette:{
                        _id : req.body.cuisineCompleteKitchenetteId
                    }
                }
            },
            {new: true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: ` erreur lors de retrais de l'article`});
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteEvierEtRobinetCuisine = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    evierEtRobinetCuisine : {
                        _id : req.body.evierEtRobinetCuisineId
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: `  erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};


module.exports.deletePlanTravailCredenceFondHotte = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    planTravailCredenceFondHotte : {
                        _id : req.body.planTravailCredenceFondHotteId
                    }
                }
            },
            {new: true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({ message: ` erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};

module.exports.deleteElectroMenager = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID Invalide ${req.params.id}`);

    try{
        JardinTrasse.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    electroMenager:{
                        _id : req.body.electroMenagerId
                    }
                }
            },
            {new: true},
            (err, docs)=>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : ` erreur lors de retrais de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};


// display JardinTerrasse  
module.exports.displayJardinT = (req, res) =>{
    
    JardinTrasse.find((err, docs) =>{
        if(!err)
            res.send(docs);
        else
            console.log("erreur de transmission de la liste article : " + err)   
            
    });
    
};
