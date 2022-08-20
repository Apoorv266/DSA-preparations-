var truncateSentence = function (s, k) {
    let result = s.split(" ");
    let str = []
    
    for (let i = 0; i < k; i++) {
        str.push(result[i])
    }
    
return str.join(' ') 
};

console.log(truncateSentence("Hello how are you Contestant", 4))


