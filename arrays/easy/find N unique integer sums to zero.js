var sumZero = function (n) {
    let output = []
    if (n % 2 !== 0) {
        output.push(0)
    }

    // console.log(output.length + 1)
    while (output.length < n) {
        let index = output.length+1

        output.push(index)
        output.push(-index)
      
        console.log(output.length,n)
    }

    return output
};

console.log(sumZero(6))

