describe("Point", function () {
    var point;

    beforeEach(function () {
        point = new Point(10, 34);
    });

    it("should be able to return it's X value", function () {
        expect(point.x).toEqual(10);
    });

    it("should be able to return it's Y value", function () {
        expect(point.y).toEqual(34);
    });

    it("should be able to return it's diameter", function () {
        expect(point.diameter).toEqual(20);
    });
});