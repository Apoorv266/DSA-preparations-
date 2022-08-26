var numberOfLines = function (s) {
    console.log(s.length)
    console.log(s.length - 10)
    console.log("------------")
    let subs = s.length
    let i = 12
    let counter = 0
    while (subs >= 10) {
        let diff = subs - 10
        subs = diff
        counter++
    }
    return s.length
};

console.log(numberOfLines("abcdefghijklmnopqrstuvwxyz"))
