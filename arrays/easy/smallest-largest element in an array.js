
function orderFun(arr,k) {
    let Chars2 = [...new Set(arr)];
    let Chars = Chars2.sort((a,b) => a-b);
    console.log(Chars)
    if (Chars.length == 1 && k > 1) {
       return `${-1}, ${-1}`
    }
    else if (Chars.length == 1 && k == 1){
        return `${Chars[ k -1]}, ${Chars[k - 1]}`
    }
    else{
    return `${Chars[Chars.length - k]},${Chars[k - 1] }`
}
}



console.log(orderFun([5, 5, 5],1))