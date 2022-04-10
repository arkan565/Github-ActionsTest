const app = require("./index.js")
const supertest = require("supertest")
const request = supertest(app)
describe("/test endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hola, a todos, lagooners!");
    })
    afterAll((done) => {
      app.close()
      done();
    });
})