var wateringPlants = function (plants, capacity) {

    let counter = 0
    // store the capacity in val since we have to modify the capacity
    let val = capacity

    // loop over the plants array
    for (let i = 0; i < plants.length; i++) {

        // if val is higher than current value then substract it from current value and update the val
        // val is updated for next loop
        // increase counter by 1
        if (val >= plants[i]) {
            val = val - plants[i]
            counter += 1
        }

        // if the val is lower than the currect value then fill up the val with capacity again and then then substract it from current value and update the val
         // val is updated for next loop
        else if (val <= plants[i]) {
            val = capacity
            val = val - plants[i]
            // increase the counter by number of steps we need to go back to river from current element (i steps) and number of steps we need to come back again to current element (i + 1 steps)
            counter += i + (i + 1)
        }
    }

    // return counter
    return counter
};


console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4))


// let a = 2
// b  = a + ((2 + 1)+ 1)
// a+=b
// console.log("a",a)