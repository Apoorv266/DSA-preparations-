var arraySign = function(nums) {
    let product = 1
    nums.map((item) =>{
        product = product * item
    })
   let sign = signFunc(product)
   return sign
};

function signFunc(x) {
    if (x < 0) {
        return -1
    }
    else if(x > 0){
        return 1
    }
    else{
        return 0
    }
}

console.log(arraySign([-1,1,-1,1,-1]))

