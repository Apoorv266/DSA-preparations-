// given a String, determine if it a palindrome , considering only alphanumeric characters and ingoring cases

function checkPalim(str) {
    let start = 1
    let end = str.length - 1

    while (start < end) {
        if (str[start] !== str[end]) {

            return false
        }


        start++
        end--
    }

    return true
}

console.log(checkPalim("rapcap"))