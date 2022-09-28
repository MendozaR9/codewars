function goodVsEvil(good,evil){
    let goodSolider =good.split(" ")
    let evilSolider = evil.split(" ")
    let goodWorth =0
    let evilWorth =0
    let goodCount = [1,2,3,3,4,10]
    let evilCount = [1,2,2,2,3,5,10]
    for (let i = 0; i < goodSolider.length; i++) {
       goodWorth += goodSolider[i]*goodCount[i]
    }
    for (let i = 0; i < evilSolider.length; i++) {
        evilWorth += evilSolider[i]* evilCount[i]
    }
    return whoWins(goodWorth, evilWorth)

}
    function whoWins(good, evil){
       if(good > evil){
           return "Battle Result: Good triumphs over Evil"
       }else if (good <evil){
           return "Battle Result: Evil eradicates all trace of Good"
       }else return "Battle Result: No victor on this battle field"
    }

let good1 = "1 1 1 1 1 1"
let evil1 = "1 1 1 1 1 1 1"
console.log(goodVsEvil(good1, evil1));
