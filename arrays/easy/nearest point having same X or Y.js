var nearestValidPoint = function (points, x, y) {
    let val = Infinity
    let index = Infinity
    
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            let a = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
            // console.log(a)
            if (a < val) {
                val = a
                index = i
            }
        }
    }
    if (index === Infinity) {
        return -1
    }
    return index
};

console.log(nearestValidPoint([[1, 2], [3, 1], [2,4]], 3, 4))
