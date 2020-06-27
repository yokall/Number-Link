describe("Path", function () {
    var path;

    beforeEach(function () {
        path = new Path();
    });

    it("should be able to return it's current length", function () {
        expect(path.length).toEqual(0);
    });

    describe("when adding a point", function () {
        var point = new Point(25, 75);

        it("should be returned as the last point", function () {
            path.addPoint(point);

            var lastPoint = path.lastPoint;

            expect(lastPoint.x).toEqual(25);
            expect(lastPoint.y).toEqual(75);
        });

        it("should increase the path length", function () {
            path.addPoint(point);

            expect(path.length).toEqual(1);

            var point2 = new Point(25, 125);
            path.addPoint(point2);

            expect(path.length).toEqual(2);
        });

        it("should remove the last point if it is the previous point", function () {
            path.addPoint(point);

            expect(path.length).toEqual(1);

            var point2 = new Point(25, 125);
            path.addPoint(point2);

            expect(path.length).toEqual(2);

            var point3 = new Point(25, 75);
            path.addPoint(point3);

            expect(path.length).toEqual(1);
        });

        describe("it should not be added if", function () {
            it("the path is at max length", function () {
                path.maxLength = 1;

                path.addPoint(point);

                expect(path.length).toEqual(1);

                var point2 = new Point(75, 75);
                path.addPoint(point2);

                expect(path.length).toEqual(1);
            });

            it("it is a diagonal move from the previous point", function () {
                path.addPoint(point);

                var point2 = new Point(75, 125);
                path.addPoint(point2);

                expect(path.length).toEqual(1);
            });

            it("it is moving back into a previous point in the path", function () {
                path.addPoint(point);

                var point2 = new Point(25, 125);
                path.addPoint(point2);

                var point3 = new Point(75, 125);
                path.addPoint(point3);

                var point4 = new Point(75, 75);
                path.addPoint(point4);

                expect(path.length).toEqual(4);

                var point5 = new Point(25, 75);
                path.addPoint(point5);

                expect(path.length).toEqual(4);
            });
        });
    });
});