
const request = require("supertest");
const app = require("../app");
const {User} = require("../models/user");
const newUser = {
    nom : "evra",
    prenom : "patrice",
    email: "evra2020@test.com",
    password : "patrice2020",
    username: "paty",
    niveau : "user"
}

// cancel user account test before create another one 
beforeEach( async()=>{
    
    await User.findOneAndDelete(
        {nom : "henry"}
    );
    await User.findOneAndDelete(
        {nom : "evra"}
    );
    await User(newUser).save();
});

// test singUp user
describe("Post /user", ()=>{

    it(' should singUp user', async ()=>{
         await request(app)
          .post("/api/user/register")
          .send({
              nom : "henry",
              prenom : "thiery",
              username: "titi",
              email : "titi01@test.com",
              password : "test2020",
              niveau : "user"
          })
          .expect(200);

    }); 
});

// test signIn user 
describe("Post login user", ()=>{
    it("should singIn user", async () =>{
        const response = await request(app)
          .post("/api/user/login")
          .send({
              email : newUser.email,
              password : newUser.password
          })
          .expect(200)
          expect(response.get(`Set-Cookie`)).toBeDefined();
          console.log("connect with username --> ",newUser.username);
    });
});

// test singOut user 
describe("Get logout user ", () =>{
    it("should singOut user", async () =>{
        const response = await request(app)
          .get("/api/user/login")
          .send({})
          .expect(400)
       
    });
});