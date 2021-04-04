// initialisation de la BDD et import modules
const mongoose = require("mongoose");
const {Schema} = mongoose;

const JardinTrasseSchema = new Schema(
    {
        userId:{
            type:String,
            required:true
        },

        // Jardin Terrasse 

            //amenagementJardin 

                abriCloPGBV:{ // abriCloturePanneauGrillageBriseVue

                    type:[
                        {
                           
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                },

                portailMotoPPGB:{  // portailMotorisationPGVPortillonPorteGarageGardeCorpsBalustrade

                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                },

            //terrasseEtSolExterieure

                terrasseEtSolExterieure:{ //carrelageExtSolLameDeTerrasseDalleDeTerrasseEtCailleBotis ...

                        type:[
                            {
                                photo : {
                                    type : String,
                                    default: "./uploads/articles/random-user.png"
                                },
                                nom : {
                                    type: String,
                                    required: true,
                                    minlength : 3,
                                    maxlength : 55
                                },
                                enseigne:{
                                    type: String,
                                    required: true,
                                    minlength : 3,
                                    maxlength : 55
                                },
                                describe :{type : String},
                                prix : {
                                    type :Number,
                                    required : true
                                },
                            }
                        ],
                        required : true
                },
            

            //luminaireEClairageExt

                    luminaireEClairageExt:{//appliqueExtProjecteurExtEtDetecteurMvtBorneExtEtPoteletSpotExt...

                        type:[
                            {
                                photo : {
                                    type : String,
                                    default: "./uploads/articles/random-user.png"
                                },
                                nom : {
                                    type: String,
                                    required: true,
                                    minlength : 3,
                                    maxlength : 55
                                },
                                enseigne:{
                                    type: String,
                                    required: true,
                                    minlength : 3,
                                    maxlength : 55
                                },
                                describe :{type : String},
                                prix : {
                                    type :Number,
                                    required : true
                                },
                            }
                        ],
                        required : true
                    },
        

        // cuisineElectromenager 

            //meubleCuisine

                meubleCuisine:{ // caissonEtTiroirFacadeCuisinePoigneeCuisine...
                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                   
                },


            //cuisineCompleteEtKitchenette 

                cuisineCompleteKitchenette: {// cuisienCompleteKitchenette...

                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true

                },


            //evierEtRobinetCuisine 

                evierEtRobinetCuisine:{//evierCuisineRobinetCuisineEvacuationEvier...

                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                },

            //planTravailCredenceFondDeHotte 

                planTravailCredenceFondHotte:{ //planDeTravailCredenceFondHotteProfilDeDefEtBandeDeChant...

                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                },
            

            //electroMenager

                electroMenager:{ // hottePlaqueCuissonFourRefregirateurEtCongelateur...

                    type:[
                        {
                            photo : {
                                type : String,
                                default: "./uploads/articles/random-user.png"
                            },
                            nom : {
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            enseigne:{
                                type: String,
                                required: true,
                                minlength : 3,
                                maxlength : 55
                            },
                            describe :{type : String},
                            prix : {
                                type :Number,
                                required : true
                            },
                        }
                    ],
                    required : true
                },

    });

    var JardinTrasse = mongoose.model("JardinTrasse", JardinTrasseSchema);
    module.exports = {JardinTrasse};