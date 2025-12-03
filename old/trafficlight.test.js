//import module traffic light
const app = require("./trafficlight")

//test suite
describe("Test suite traffic light page", ()=>{
    it("case red light", ()=>{
        expect(app.trafficLight("red")).toBe("DON'T WALK!")
    })
    it("case green light", ()=>{
        expect(app.trafficLight("green")).toBe("WALK!")
    })
    it("case orange light", ()=>{
        expect(app.trafficLight("orange")).toBe("ATTENTION!")
    })
    it("case out of order", ()=>{
        expect(app.trafficLight(undefined)).toBe("OUT OF ORDER")
    })
})
    //case red light
//??
//??
//??
//??
//??
