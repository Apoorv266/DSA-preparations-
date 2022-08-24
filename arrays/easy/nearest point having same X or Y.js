var nearestValidPoint = function (points, x, y) {
    let val = Infinity
    let index = Infinity
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[i].length - 1; j++) {
            if (points[i][j] === x || points[i][j + 1] === y) {
                let a =  Math.abs(points[i][j] - x) + Math.abs(points[i][j + 1] - y)
                if (a < val && i < index) {
                    val = a
                    index = i
                    console.log(points[i])
                }
            }
        }
    }
    // return arr
};


console.log(nearestValidPoint([[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]], 3, 4))

