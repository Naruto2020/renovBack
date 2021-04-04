
const request = require("supertest");
const app = require("../app");
const {User} = require("../models/user");
// test singUp user
describe("Post /user", ()=>{
    // cancel user account test before create another one 
    beforeEach( async()=>{
        
        await User.findOneAndDelete(
            {nom : "henry"}
        );
    });

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
          //.set('Accept', 'application/json')
          .expect(200);

    }); 
});