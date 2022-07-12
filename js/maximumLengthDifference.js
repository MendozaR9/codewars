function mxdiflg(a1, a2){
    let a1Length= a1[1].length
    let a2Length=a2[1].length
    // for (let i = 0; i <a1.length ; i++) {
    //    a1Length += a1[i].length;
    // }
    // for (let i = 0; i < a2.length; i++) {
    //     a2Length += a2[i].length
    // }
    return a2Length-a1Length
}
let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1 , s2))