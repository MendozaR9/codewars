function count(string){
   let strArray = string.split("")
    let count ={}

strArray.forEach(function (x){
    count[x] = (count[x] || 0)+1
})
    return count
}

test1 ="aba"
test2 = ""
count(test1)
count(test2)