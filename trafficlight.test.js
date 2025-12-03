//require supertest
const request = require("supertest");
//url of localserver is assigned to app
const app = "http://localhost:3000";

describe("GET /api/welcome", () => {
    it("welcome message -1", async () => {
        return request(app)
            .get("/api/welcome")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function (res) {
                if (!res.body.hasOwnProperty('status'))
                    throw new Error("Expected 'status' key!");
                if (!res.body.hasOwnProperty('message'))
                    throw new Error("Expected 'message' key!");
            })
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });

    //this test fails
    it("out of order (fail)", async () => {
        return request(app)
            .get("/api/trafficlight")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            //.* -> match any characters (Do not forget the point!)
            .expect(/{"message":"Willkommen ...","status":"success"}/)
    });

    //this test succeeds
    it("out of order (ok)", async () => {
        return request(app)
            .get("/api/trafficlight")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            //.* -> match any characters (Do not forget the point!)
            .expect(/{"message":"OUT OF ORDER","status":"success"}/)
    });

    it("out of order (ok, but not advisable)", async () => {
        return request(app)
            .get("/api/welcome")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            //.* -> match any characters (Do not forget the point!)
            .expect(/{"message":".*","status":"success"}/)
    });
});

describe("GET /api/trafficlight", () => {
    it("out of order", async () => {
        return request(app)
            .get("/api/trafficlight")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(/{"message":"OUT OF ORDER","status":"success"}/)
    });
});

describe("GET /api/trafficlight/:color", () => {
    it("red", async () => {
        return request(app)
            .get("/api/trafficlight/red")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(/{"message":"DON'T WALK!","status":"success"}/)
    });

    it("green", async () => {
        return request(app)
            .get("/api/trafficlight/green")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(/{"message":"WALK!","status":"success"}/)
    });

    it("orange", async () => {
        return request(app)
            .get("/api/trafficlight/orange")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(/{"message":"ATTENTION!","status":"success"}/)
    });
});

