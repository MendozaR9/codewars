function mergeArrays(arr1, arr2) {
let ascOrder = []
    for (let i = 0; i < arr1.length; i++) {
        ascOrder.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        ascOrder.push(arr2[i])
    }
     ascOrder.sort(function (a, b ){
        return a-b
    })
    let filter  = ascOrder.filter(function (item , pos, sel){
        return sel.indexOf(item) == pos
    })
    return filter
}
let arr1 = [1, 3, 5, 7, 9];
let arr2=[10, 8, 6, 4, 2]

function betterMergeArray(a,b){
    return [...new Set(a.concat(b))].sort((a,b) => (a-b))
}

console.log(betterMergeArray(arr1,arr2))

// console.log(mergeArrays(arr1,arr2))