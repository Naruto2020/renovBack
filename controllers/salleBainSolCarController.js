const {SalleBainCarrelageSol} = require("../models/sBainEtScarrelage");

// import de l'objetId de mongoose
const ObjetId = require("mongoose").Types.ObjectId;
//const { text } = require("body-parser");
const { articlesErrors} = require("../utils/errorUtils");


// CRUD 

// create SalleBainCarrelageSol
module.exports.createSalleBainSolCar = async (req, res) =>{
    const newSalleBSC = new SalleBainCarrelageSol({
        userId : req.body.userId,
        meubleSalleBains : req.body.meubleSalleBains,
        douches: req.body.douches,
        wcEtLaveMains: req.body.wcEtLaveMains,
        baignoires: req.body.baignoires,
        robinetSBains:req.body.robinetSBains,
        carrelageInterieurs:req.body.carrelageInterieurs,
        parquetSolStratPlanchers: req.body.parquetSolStratPlanchers,
        solVinylPvcMoquettes:req.bodysolVinylPvcMoquettes
    });

    try{
        const salleBainCarrelageSol = await newSalleBSC.save();
        return res.status(200).json(salleBainCarrelageSol);
    }catch(err){
        return res.status(400).send(err);
    }
};

// add articles 

module.exports.postMeubleSalleBains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`ID invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    meubleSalleBains:{
                        nom: req.body.nom,
                        enseigne : req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new: true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message: `erreur lors de l'ajout de l'article`});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

module.exports.postDouches = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    douches:{
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix: req.body.prix,
                        describe: req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs)=>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message: `erreur lors de l'ajout de l'article`});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

module.exports.postWcEtLaveMains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    wcEtLaveMains:{
                        nom : req.body.nom,
                        enseigne : req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: `erreur lors de l'ajout de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }
}

module.exports.postBaignoires = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    baignoires:{
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix: req.body.prix,
                        describe: req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : `erreur lors de l'ajout de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

            
module.exports.postRobinetSBains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    robinetSBains:{
                        nom: req.body.nom,
                        enseigne: req.body.enseigne,
                        prix: req.body.prix,
                        describe: req.body.describe,
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message: `erreur lors de l'enregistrement de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

module.exports.postCarrelageInterieurs = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    carrelageInterieurs:{
                        nom : req.body.nom,
                        enseigne : req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors de l'ajout de l'article`});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};


module.exports.postParquetSolStratPlanchers = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    parquetSolStratPlanchers:{
                        nom : req.body.nom,
                        enseigne : req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors de l'ajout de l'article`});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};


module.exports.postSolVinylPvcMoquettes = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $push:{
                    solVinylPvcMoquettes:{
                        nom : req.body.nom,
                        enseigne : req.body.enseigne,
                        prix : req.body.prix,
                        describe : req.body.describe
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors de l'ajout de l'article`});  
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

// edit articles 
 module.exports.editMeubleSalleBains = (req, res) =>{
     if(!ObjetId.isValid(req.params.id))
        return res.status(400).send(`Id invalide ${req.params.id}`)

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theMeubleSalleBains = docs.meubleSalleBains.find((meubleSalleBain) =>
                   meubleSalleBain._id.equals(req.body.meubleSalleBainsId)
                );

                if(!theMeubleSalleBains)
                   return res.status(400).send(`article introuvable`);
                theMeubleSalleBains.nom = req.body.nom;
                theMeubleSalleBains.enseigne = req.body.enseigne;
                theMeubleSalleBains.prix = req.body.prix;
                theMeubleSalleBains.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                       return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});   
    }     
 };

 module.exports.editDouches = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
        return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theDouches = docs.douches.find(douche =>
                    douche._id.equals(req.body.douchesId)
                );

                if(!theDouches)
                   return res.status(400).send(`article introuvable`);

                theDouches.nom = req.body.nom,   
                theDouches.enseigne = req.body.enseigne,   
                theDouches.prix = req.body.prix,   
                theDouches.describe = req.body.describe 

                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    
                    return res.status(500).send(err);                    
                });
            }

        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }    
 };

 module.exports.editWcEtLaveMains = (req, res) =>{
     if(!ObjetId.isValid(req.params.id))
        return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theWcEtLaveMains = docs.wcEtLaveMains.find(wcEtLaveMain => 
                    wcEtLaveMain._id.equals(req.body.wcEtLaveMainsId)
                );

                if(!theWcEtLaveMains)
                   return res.status(400).send(`Article introuvable`);

                theWcEtLaveMains.nom = req.body.nom,   
                theWcEtLaveMains.enseigne = req.body.enseigne,   
                theWcEtLaveMains.prix = req.body.prix,   
                theWcEtLaveMains.describe = req.body.describe


                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }    
 };

 module.exports.editBaignoires = (req, res) =>{
     if(!ObjetId.isValid(req.params.id))
        return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theBaignoires = docs.baignoires.find( baignoire =>
                    baignoire._id.equals(req.body.baignoiresId)
                );

                if(!theBaignoires)
                   return res.status(400).send(`article introuvable`);

                theBaignoires.nom = req.body.nom,
                theBaignoires.enseigne = req.body.enseigne,
                theBaignoires.prix = req.body.prix,
                theBaignoires.describe = req.body.describe   

                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }    
 };

module.exports.editRobinetSBains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs)=>{
                const theRobinetSBains = docs.robinetSBains.find(robinetSBain => 
                    robinetSBain._id.equals(req.body.robinetSBainsId)
                );

                if(!theRobinetSBains)
                   return res.status(400).send(`article introuveble`);
                
                theRobinetSBains.nom = req.body.nom;
                theRobinetSBains.enseigne = req.body.enseigne;
                theRobinetSBains.prix = req.body.prix;
                theRobinetSBains.describe = req.body.describe;   

                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return  res.status(500).send(err);
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

module.exports.editCarrelageInterieurs = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theCarrelageInterieurs = docs.carrelageInterieurs.find(carrelageInterieur => 
                    carrelageInterieur._id.equals(req.body.carrelageInterieursId)
                );

                if(!theCarrelageInterieurs)
                   return res.status(400).send(`article introuvable`);
                
                theCarrelageInterieurs.nom = req.body.nom;
                theCarrelageInterieurs.enseigne = req.body.enseigne;
                theCarrelageInterieurs.prix = req.body.prix;
                theCarrelageInterieurs.describe = req.body.describe;
                
                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};


module.exports.editParquetSolStratPlanchers = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theParquetSolStratPlanchers = docs.parquetSolStratPlanchers.find(parquetSolStratPlancher => 
                    parquetSolStratPlancher._id.equals(req.body.parquetSolStratPlanchersId)
                );

                if(!theParquetSolStratPlanchers)
                   return res.status(400).send(`article introuvable`);
                
                theParquetSolStratPlanchers.nom = req.body.nom;
                theParquetSolStratPlanchers.enseigne = req.body.enseigne;
                theParquetSolStratPlanchers.prix = req.body.prix;
                theParquetSolStratPlanchers.describe = req.body.describe;
                
                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};


module.exports.editSolVinylPvcMoquettes = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        return SalleBainCarrelageSol.findById(
            req.params.id,
            (err, docs) =>{
                const theSolVinylPvcMoquettes = docs.solVinylPvcMoquettes.find(solVinylPvcMoquette => 
                    solVinylPvcMoquette._id.equals(req.body.solVinylPvcMoquettesId)
                );

                if(!theSolVinylPvcMoquettes)
                   return res.status(400).send(`article introuvable`);
                
                theSolVinylPvcMoquettes.nom = req.body.nom;
                theSolVinylPvcMoquettes.enseigne = req.body.enseigne;
                theSolVinylPvcMoquettes.prix = req.body.prix;
                theSolVinylPvcMoquettes.describe = req.body.describe;
                
                return docs.save(err =>{
                    if(!err)
                      return res.status(200).send(docs);
                    return res.status(500).send(err);  
                });
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

// delete SalleBainCarrelageSol and articles 

module.exports.deleteSalleBainCarSol = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalid ${req.params.id}`);
    
    try{
        SalleBainCarrelageSol.findByIdAndDelete(
            req.params.id,
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send(`erreur lors de la suppression de l'article`);   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};


module.exports.deleteMeubleSalleBains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
    return res.status.send(`Id invalide ${req.params.id}`);
    
    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    meubleSalleBains:{
                        _id : req.body.meubleSalleBainsId
                    }
                }
            },
            {new: true},
            (err, docs) =>{
                if(!err)
                return res.send(docs);
                return res.status(500).send({message: `erreur lors de la suppression de l'article`});   
            }
            );
        }catch(err){
            return res.status(400).send(err);
        }   
    };
    
module.exports.deleteDouches = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
    return res.status(400).send(`Id invalid ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    douches:{
                        _id : req.body.douchesId
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message:`erreur lors du retrait de l'article`});   
            }
        );
    }catch(err){
        const errors = articlesErrors(err);
        return res.status(201).send({errors});
    }   
};

module.exports.deleteWcEtLaveMains = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    wcEtLaveMains:{
                        _id : req.body.wcEtLaveMainsId
                    }
                }
            },
            {new : true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors du retrait de l'article `});  
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }    
}

module.exports.deleteBaignoires = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    baignoires:{
                        _id: req.body.baignoiresId
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                   return res.send(docs);
                return res.status(500).send({message : `erreur lors du retrait de l'article`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }  
};

module.exports.deleteRobinetSBains = (req, res)=>{
    if(!ObjetId.isValid(req.params.id))
      return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    robinetSBains:{
                        _id: req.body.robinetSBainsId
                    }
                }
            },
            {new: true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message: "erreur lors du retrait de l'article"});  
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }  
};

module.exports.deleteCarrelageInterieurs = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    carrelageInterieurs:{
                        _id : req.body.carrelageInterieursId
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors du retrait de l'article`});  
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};


module.exports.deleteParquetSolStratPlanchers = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    parquetSolStratPlanchers:{
                        _id : req.body.parquetSolStratPlanchersId
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors du retrait de l'article`});  
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};


module.exports.deleteSolVinylPvcMoquettes = (req, res) =>{
    if(!ObjetId.isValid(req.params.id))
       return res.status(400).send(`Id invalide ${req.params.id}`);

    try{
        SalleBainCarrelageSol.findByIdAndUpdate(
            req.params.id,
            {
                $pull:{
                    solVinylPvcMoquettes:{
                        _id : req.body.solVinylPvcMoquettesId
                    }
                }
            },
            {new:true},
            (err, docs) =>{
                if(!err)
                  return res.send(docs);
                return res.status(500).send({message : `erreur lors du retrait de l'article`});  
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }   
};
    
// display  SalleBainCarrelageSol list 
module.exports.getSalleBainCarrelageSol = (req, res) =>{
    try{
        SalleBainCarrelageSol.find(
            (err, docs) =>{
                if(!err)
                   return res.status(200).send(docs);

                return res.status(500).send({message : `erreur lors de l'affiche de la liste`});   
            }
        );
    }catch(err){
        return res.status(400).send(err);
    }
};