const checkSum = require('../src/day2/index.js');

describe("Check Sum", () => {
    test("should return 18 for [5, 1, 9, 5],[7, 5, 3],[2, 4, 6, 8] ", () => {
        expect(checkSum([5, 1, 9, 5],[7, 5, 3],[2, 4, 6, 8])).toBe(18);
	});
});