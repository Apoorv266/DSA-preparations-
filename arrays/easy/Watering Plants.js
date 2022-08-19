var wateringPlants = function (plants, capacity) {
    // console.log(plants[plants.length - 1])
    let counter = 0
    let val = capacity

    for (let i = 0; i < plants.length; i++) {
        let subs = val - plants[i]

        if (val > plants[i]) {
            val = subs
            counter+=1
        }
        
        else if (val < plants[i]) {
            val = capacity
            let add = 2 + i
            counter +=add 
        }
        console.log(subs,val,counter)
    }
    
    return counter
};

console.log(wateringPlants([2, 2, 3, 3], 5))