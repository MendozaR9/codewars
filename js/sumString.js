function sumString(a,b){
    let sum;
    if (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b))){
        sum = parseFloat(a)+parseFloat(b)
    } else if(!isNaN(parseFloat(a))  && isNaN(parseFloat(b))){
        sum = parseFloat(a)
    } else if (!isNaN(parseFloat(b)) && isNaN(parseFloat(a))){
        sum= parseFloat(b)
    }
    return sum.toString();
}

console.log(sumString("123", "456"))
console.log(sumString('', 5))