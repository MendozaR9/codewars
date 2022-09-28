function goodVsEvil(good,evil){
    let goodSolider =good.split(" ")
    let goodWorth =0
    let evilWorth =0
    let goodCount = [1,2,3,3,4,10]
    let evilCount = [1,2,2,2,3,5,10]
    for (let i = 0; i < goodSolider.length; i++) {
       goodWorth += goodSolider[i]*goodCount[i]
    }

    console.log(goodWorth)


// evil
//     Orcs: 1
//     Men: 2
//     Wargs: 2
//     Goblins: 2
//     Uruk Hai: 3
//     Trolls: 5
//     Wizards: 10

}
let good1 = "1 1 1 1 1 1"
let evil1 = "1 1 1 1 1 1 1"
goodVsEvil(good1, evil1)