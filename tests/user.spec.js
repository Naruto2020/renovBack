
const request = require("supertest");
const app = require("../app");
const {User} = require("../models/user");
const ObjetId = require("mongoose").Types.ObjectId
const newUser = {
    nom : "evra",
    prenom : "patrice",
    email: "evra2020@test.com",
    password : "patrice2020",
    username: "paty",
    niveau : "user"
}
let users = "";
let currentUsr = "";
let id = "6069eed174b52a7280cc5cdf"

beforeEach( async () =>{
    if(!ObjetId.isValid(id))
       console.log(`Id incorect ${id}`);
    users = await User.find().select("username");
    currentUsr = await User.findById(id).select("username");

});

// test get user list
describe("Get All users", () =>{
    it("should display all users", async() =>{
        await request(app)
          .get("/api/user")
          .expect(200)
          console.log("all users",users)
    });
});

// test display current user 
describe("Get current suer", () =>{
    it("should display current user details", async () =>{
        await request(app)
          .get("/api/user/" + id)
          .expect(200)
          console.log("current user is -->", currentUsr);
    });
});


