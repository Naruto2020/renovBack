// initialisation de la BDD et import modules
const mongoose = require("mongoose");
const {Schema} = mongoose;

const SalleBainCarrelageSolSchema = new Schema(
    {
        userId:{
            type:String,
            required:true
        },

        // salle de bains

            // meuble de salle de bains 
                meubleSalleBains:{ 

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
            
            // Douches
                douches:{ 

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

            // Wc et lave-mains
            
                wcEtLaveMains:{ 

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

            // Baignoire
            
                baignoires:{ 

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

            // Robinet de salle de bains 
            
                robinetSBains:{ 

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


        // Sol Carrelages       
        
            // Carrelage Intérieur

                carrelageInterieurs:{ 

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

            // Parquet sol stratifié et plancher 
            
                parquetSolStratPlanchers:{ 

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

            // Sol Vinyle PVC Moquettes     

                solVinylPvcMoquettes:{ 

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
    }
);

const SalleBainCarrelageSol = mongoose.model("SalleBainCarrelageSol",SalleBainCarrelageSolSchema);
module.exports = {SalleBainCarrelageSol};

