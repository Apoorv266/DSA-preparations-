var mostWordsFound = function (sentences) {
    
    let wordlen = 0
    let j = 0
    
    while (j < sentences.length) {
        let count = 1

        for (let i = 0; i < sentences[j].length - 1; i++) {

            if (sentences[j][i] === " ") {
                count++
            }

            if (count > wordlen) {
                wordlen = count
            }
        }
        j++
    }
    
    return wordlen
}

let sentences = ["alice and bob love leetcode","i think so too","this is great thanks very much"]

console.log(mostWordsFound(sentences))