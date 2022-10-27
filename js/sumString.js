function sumString(a,b){

    let sum;
    if (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b))){
        sum = parseFloat(a)+parseFloat(b)
    } else if(!isNaN(parseFloat(a))  && isNaN(parseFloat(b))){
        sum = parseFloat(a)
    } else if (!isNaN(parseFloat(b)) && isNaN(parseFloat(a))){
        sum= parseFloat(b)
    }
return sum.toString()
    // return  sum.toLocaleString('fullwide', {useGrouping: false})
}



let test1 ="712569312664357328695151392"
let test2 ="8100824045303269669937"

console.log(sumString("123", "456"))
console.log(sumString('', 5))
console.log(sumString(test1,test2))