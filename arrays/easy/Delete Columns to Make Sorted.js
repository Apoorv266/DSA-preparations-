var minDeletionSize = function (strs) {


    let counter = 0
    for (let j = 0; j < strs[0].length ; j++) {
        for (let i = 0; i < strs.length - 1; i++) {
            if ( strs[i].charCodeAt(j) > strs[i + 1].charCodeAt(j)) {
                counter++
                break
            }
            // console.log(strs[i])
        }
        // console.log("---")
    }
    return counter
};

console.log(minDeletionSize(["zyxc","wvus","tsrk"]))


// let ar =["zyxc","wvus","tsrk"]
// console.log(ar.length - 1)
// console.log(ar[0][3])


