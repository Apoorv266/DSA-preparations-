var countMatches = function (items, ruleKey, ruleValue) {
    let counter = 0
    // loop over the items array
    for (let i = 0; i < items.length; i++) {

        // if ruleKey is "type" and item at 0 index is equal to ruleValue then increase counter because i[0] represents type
        if (ruleKey === "type" && items[i][0] === ruleValue) counter++
        

        // if ruleKey is "color" and item at 1 index is equal to ruleValue then increase counter because i[1] represents color
        if (ruleKey === "color" && items[i][1] === ruleValue) counter++
        

        // if ruleKey is "name" and item at 2 index is equal to ruleValue then increase counter because i[2] represents color
        if (ruleKey === "name" && items[i][2] === ruleValue)counter++

    }
    // return counter
    return counter
};

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"))