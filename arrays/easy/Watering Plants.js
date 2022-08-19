var wateringPlants = function (plants, capacity) {
    // console.log(plants[3])
    let counter = 0
    let val = capacity

    for (let i = 0; i < plants.length; i++) {
        let subs = val - plants[i]

        if (val > plants[i]) {
            val = subs
            counter+=1
        }
        
        else if (val < plants[i]) {
            val = subs
            let add =  i + (i + 1)
            counter += add 
        }
        console.log(subs,val,counter,i)
    }
    
    return counter
};

console.log(wateringPlants([2, 2, 3, 3], 5))


// let a = 2
// b  = a + ((2 + 1)+ 1)
// a+=b
// console.log("a",a)