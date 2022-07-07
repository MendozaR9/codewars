function  powersOfTwo(n){
    let powerOfTwos = []
    for (let i = 0; i <= n; i++) {
        powerOfTwos.push(Math.pow(2,i))
    }
   return  powerOfTwos

}

console.log(powersOfTwo(4))