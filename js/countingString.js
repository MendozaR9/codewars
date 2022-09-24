function count(string){
   let strArray = string.split("")

    console.log(strArray.filter(checkSame));
    console.log(strArray)
}
function checkSame(str){
    return str === str
}
test1 ="aba"
test2 = ""
count(test1)
count(test2)