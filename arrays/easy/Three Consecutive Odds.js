var threeConsecutiveOdds1 = function (arr) {

    for (let i = 1; i <= arr.length - 2; i++) {

        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
            return true
        }

    }
    return false
};

console.log(threeConsecutiveOdds1([1, 2, 34, 3, 4, 5, 7, 23, 12]))


// or


var threeConsecutiveOdds2 = function (arr) {

    let counter = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            counter++
        }

        else{
            counter = 0
        }

        if(counter === 3){
            return true
        }

    }
    return false
};

console.log(threeConsecutiveOdds2([1, 3]))


let arr = ["1", "2","15", "-7", "300"]
let y = arr.sort()

