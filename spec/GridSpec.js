describe("Point", function () {
    var grid;

    beforeEach(function () {
        grid = new Grid();
    });

    it("should be able to return square at position", function () {
        var square = grid.getSquareAtPosition(175, 325);

        expect(square.startSquare).toEqual(6);
    });
});