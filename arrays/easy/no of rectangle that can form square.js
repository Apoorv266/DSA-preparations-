var countGoodRectangles = function(rectangles) {
    for (let i = 0; i < rectangles.length ; i++) rectangles[i] = Math.min(...rectangles[i])
    return rectangles.filter(x => x == Math.max(...rectangles)).length;
};

console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]))