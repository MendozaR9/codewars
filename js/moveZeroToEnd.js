function moveZeros(arr){
    let noZero = []
    let zero =[]
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        console.log(arr[i] !== 0)
        if (arr[i] !== 0){
            noZero.push(arr[i])
        } else if (arr[i] === 0) {
            zero.push(arr[i])
        }
    }
  let zeroAtEnd = noZero.concat(zero)
    return zeroAtEnd

}

let arry = [[],{},1,2,0,1,0,1,0,3,0,1]
console.log(moveZeros(arry))