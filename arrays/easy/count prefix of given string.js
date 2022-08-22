var countPrefixes = function(words, s) {
    let counter = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].slice(0,words[i].length) === s.slice(0,words[i].length)) {
           counter++
        }
    }
    return counter
};

var countPrefixes = function(words, s) {
    return words.filter((word) => word.slice(0,word.length) === s.slice(0,word.length)).length;
};



console.log(countPrefixes(["a","b","c","ab","bc","abc"],"abc"))


// let test = ["abc", "acs"]

// console.log(test[0].slice(0,test[0].length))