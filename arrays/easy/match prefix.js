var prefixCount = function(words, pref) {
    let counter= 0
    for (let i = 0; i < words.length; i++) {
       if (words[i].substr(0, pref.length) === pref) {
        counter++
       }
    }

    return counter

}

// or

var prefixCount = function(words, pref) {
return words.filter(word => word.substr(0, pref.length) === pref).length;
};

console.log(prefixCount(["pay","attention","practice","attend"], "at"))