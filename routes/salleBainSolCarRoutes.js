// initialisation du routeur express

const express = require("express");
const router = express.Router();

// import modules 

const salleBainSolCarController = require("../controllers/salleBainSolCarController");

// CRUD 

// create SalleBainCarrelageSol and add articles 
router.post("/", salleBainSolCarController.createSalleBainSolCar);

router.patch("/meubleSalleBains/:id", salleBainSolCarController.postMeubleSalleBains);
router.patch("/douches/:id", salleBainSolCarController.postDouches);
router.patch("/wcEtLaveMains/:id", salleBainSolCarController.postWcEtLaveMains);
router.patch("/baignoires/:id", salleBainSolCarController.postBaignoires);
router.patch("/robinetSBains/:id", salleBainSolCarController.postRobinetSBains);
router.patch("/carrelageInterieurs/:id", salleBainSolCarController.postCarrelageInterieurs);
router.patch("/parquetSolStratPlanchers/:id", salleBainSolCarController.postParquetSolStratPlanchers);
router.patch("/solVinylPvcMoquettes/:id", salleBainSolCarController.postSolVinylPvcMoquettes);

// edit SalleBainCarrelageSol articles 
router.patch("/edit-meubleSalleBains-post/:id", salleBainSolCarController.editMeubleSalleBains);
router.patch("/edit-douches-post/:id", salleBainSolCarController.editDouches);
router.patch("/edit-wcEtLaveMains-post/:id", salleBainSolCarController.editWcEtLaveMains);
router.patch("/edit-baignoires-post/:id", salleBainSolCarController.editBaignoires);
router.patch("/edit-robinetSBains-post/:id",salleBainSolCarController.editRobinetSBains);
router.patch("/edit-carrelageInterieurs-post/:id",salleBainSolCarController.editCarrelageInterieurs);
router.patch("/edit-parquetSolStratPlanchers-post/:id",salleBainSolCarController.editParquetSolStratPlanchers);
router.patch("/edit-solVinylPvcMoquettes-post/:id",salleBainSolCarController.editSolVinylPvcMoquettes);

// delete SalleBainCarrelageSol and articles 

router.delete("/:id", salleBainSolCarController.deleteSalleBainCarSol);

router.patch("/delete-meubleSalleBains-post/:id", salleBainSolCarController.deleteMeubleSalleBains);
router.patch("/delete-douches-post/:id", salleBainSolCarController.deleteDouches);
router.patch("/delete-wcEtLaveMains-post/:id", salleBainSolCarController.deleteWcEtLaveMains);
router.patch("/delete-baignoires-post/:id", salleBainSolCarController.deleteBaignoires);
router.patch("/delete-robinetSBains-post/:id", salleBainSolCarController.deleteRobinetSBains);
router.patch("/delete-carrelageInterieurs-post/:id", salleBainSolCarController.deleteCarrelageInterieurs);
router.patch("/delete-parquetSolStratPlanchers-post/:id", salleBainSolCarController.deleteParquetSolStratPlanchers);
router.patch("/delete-solVinylPvcMoquettes-post/:id", salleBainSolCarController.deleteSolVinylPvcMoquettes);

// get all  SalleBainCarrelageSol list
router.get("/", salleBainSolCarController.getSalleBainCarrelageSol);




module.exports = router;