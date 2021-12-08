import * as App from "../src/App";
import * as math from "../src/math";
test("calls math.add", () => {
    // store the original implementation
    const originalAdd = math.add;
    // mock add with the original implementation
    math.add = jest.fn(originalAdd);
    // spy the calls to add
    expect(App.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // override the implementation
    math.add.mockImplementation(() => "mock");
    expect(App.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // restore the original implementation
    math.add = originalAdd;
    expect(App.doAdd(1, 2)).toEqual(3);
});