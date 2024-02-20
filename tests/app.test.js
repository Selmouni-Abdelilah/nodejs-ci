const my_express_server = require("../app/app.js");
const supertest = require("supertest");
const { default: expect } = require("expect");

describe("Homepage Hello", () => {
    const check_homepage_expectations = (supertest_response) => {
        expect(supertest_response.status).toEqual(200);
        expect(supertest_response.type).toEqual('text/html');
        expect(supertest_response.text).toEqual("Hello CLOUD!");
    }
    it("GET / return hello world", async () => {
        const res = await supertest(my_express_server).get("/");
        check_homepage_expectations(res);
    });
    it("GET /index.html return hello world", async () => {
        const res = await supertest(my_express_server).get("/index.html");
        check_homepage_expectations(res);
    });
});
