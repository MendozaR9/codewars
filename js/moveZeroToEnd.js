function moveZeros(arr){
    let noZero = []
    let zero =[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0){
            noZero.push(arr[i])
        } else if (arr[i] === 0) {
            zero.push(arr[i])
        }
    }
    return noZero.concat(zero)

}

function betterMoveZeros(arr){
    let noZeros = arr.filter(function (num){
        return num !== 0;
    })
    let zeros = arr.filter(function (num){
        return num  === 0;
    })
    return noZeros.concat(zeros)
}


let arry = [[],{},1,2,0,1,0,1,0,3,0,1]
console.log(betterMoveZeros(arry))