describe("Grid", function () {
    var grid;

    beforeEach(function () {
        grid = new Grid();
    });

    describe("when calling getSquareAtPosition", function () {
        it("should be able to return square at position", function () {
            var square = grid.getSquareAtPosition(175, 325);

            square.draw();

            expect(square.startSquare).toEqual(3);
        });

        it("should not return a square if the position is not in the center of the square", function () {
            var square = grid.getSquareAtPosition(150, 310);

            expect(square).toBeUndefined();
        });

        it("should not return a square if the position is not in a square at all", function () {
            var square = grid.getSquareAtPosition(50, 10);

            expect(square).toBeUndefined();
        });
    });
});