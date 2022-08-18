var mostWordsFound = function (sentences) {
    // console.log(sentences[0])
    
    let wordlen = 1
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

let sentences = ["sgvfsvk"]

console.log(mostWordsFound(sentences))