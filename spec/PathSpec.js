describe("Point", function () {
    var path;

    beforeEach(function () {
        path = new Path();
    });

    it("should be able to return it's current length", function () {
        expect(path.length).toEqual(0);
    });

    describe("when adding a point", function () {
        var point;

        it("should be returned as the last point", function () {
            point = new Point(25, 75);

            path.addPoint(point);

            var lastPoint = path.lastPoint;

            expect(lastPoint.x).toEqual(25);
            expect(lastPoint.y).toEqual(75);
        });
    });
});