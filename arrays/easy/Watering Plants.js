var wateringPlants = function (plants, capacity) {

    let counter = 0
    let val = capacity
    
    for (let i = 0; i < plants.length; i++) {
        
        if (val >= plants[i]) {
            val = val - plants[i]
            counter+=1
        }
        
        else if (val <= plants[i]) {
            val = capacity
            val = val - plants[i]
            counter += i + (i + 1)
        }
    }
    
    return counter
};


console.log(wateringPlants([3,2,4,2,1], 6))


// let a = 2
// b  = a + ((2 + 1)+ 1)
// a+=b
// console.log("a",a)