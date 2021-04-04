// initialisation du routeur express
const express = require("express");
const router = express.Router();

// import modules 
const jardinTController = require("../controllers/jardinTController");
const uploadController = require("../controllers/uploadControler");

// multer for upload img 
const multer = require("multer");
const upload = multer();

// CRUD articles 

// add articles 
router.post("/", jardinTController.createJardinT);
router.patch("/abriCloPGBV/:id", jardinTController.postAbriCloPGBV);
router.patch("/portailMotoPPGB/:id", jardinTController.postPortailMotoPPGB);
router.patch("/terrasseEtSolExterieure/:id", jardinTController.postTerrasseEtSolExterieure);
router.patch("/luminaireEClairageExt/:id", jardinTController.postLuminaireEClairageExt);
router.patch("/meubleCuisine/:id", jardinTController.postMeubleCuisine);
router.patch("/cuisineCompleteKitchenette/:id", jardinTController.postCuisineCompleteKitchenette);
router.patch("/evierEtRobinetCuisine/:id", jardinTController.postEvierEtRobinetCuisine);
router.patch("/planTravailCredenceFondHotte/:id", jardinTController.postPlanTravailCredenceFondHotte);
router.patch("/electroMenager/:id", jardinTController.postElectroMenager);

// Edit articles 
router.patch("/edit-abriCloPGBV-post/:id", jardinTController.editAbriCloPGBV);
router.patch("/edit-portailMotoPPGB-post/:id", jardinTController.editPortailMotoPPGB);
router.patch("/edit-terrasseEtSolExterieure-post/:id", jardinTController.editTerrasseEtSolExterieure);
router.patch("/edit-luminaireEClairageExt-post/:id", jardinTController.editLuminaireEClairageExt);
router.patch("/edit-meubleCuisine-post/:id", jardinTController.editMeubleCuisine);
router.patch("/edit-cuisineCompleteKitchenette-post/:id", jardinTController.editCuisineCompleteKitchenette);
router.patch("/edit-evierEtRobinetCuisine-post/:id", jardinTController.editEvierEtRobinetCuisine);
router.patch("/edit-planTravailCredenceFondHotte-post/:id", jardinTController.editPlanTravailCredenceFondHotte);
router.patch("/edit-electroMenager-post/:id", jardinTController.editElectroMenager);

// delete articles 
router.delete("/", jardinTController.deleteJardinT);

router.patch("/delete-abriCloPGBV-post/:id", jardinTController.deleteAbriCloPGBV);
router.patch("/delete-portailMotoPPGB-post/:id", jardinTController.deletePortailMotoPPGB);
router.patch("/delete-terrasseEtSolExterieure-post/:id", jardinTController.deleteTerrasseEtSolExterieure);
router.patch("/delete-luminaireEClairageExt-post/:id", jardinTController.deleteLuminaireEClairageExt);
router.patch("/delete-meubleCuisine-post/:id", jardinTController.deleteMeubleCuisine);
router.patch("/delete-cuisineCompleteKitchenette-post/:id", jardinTController.deleteCuisineCompleteKitchenette);
router.patch("/delete-evierEtRobinetCuisine-post/:id", jardinTController.deleteEvierEtRobinetCuisine);
router.patch("/delete-planTravailCredenceFondHotte-post/:id", jardinTController.deletePlanTravailCredenceFondHotte);
router.patch("/delete-electroMenager-post/:id", jardinTController.deleteElectroMenager);

// display articles 
router.get("/", jardinTController.displayJardinT);





module.exports = router;