import * as App from "../src/App";
import * as math from "../src/math";

// Set all module functions to jest.fn
jest.mock("./math.js");
test("calls math.add", () => {
    App.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
    App.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});