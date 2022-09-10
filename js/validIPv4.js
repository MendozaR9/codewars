function isValidIpP(str){
    let ip = str.split(".")

    let validIp = false;
    let isNotNum= false
    let nonValidChar = false
    console.log(ip)
    if (ip.length ===4) {
        for (let i = 0; i < ip.length; i++) {
            for (let j = 0; j < ip[i].length; j++) {
             if (isNaN( parseInt(ip[i].charAt(j)))){
                 isNotNum = true
                 break
             }
            }
            if (typeof parseInt(ip[i]) == "number"){
                if (ip[i] >= 0 && ip[i] <= 255) {
                    console.log(ip[i])
                    if (ip[i].length === 1 && ip[i].charAt(0) === "0") {
                        validIp = true

                    } else if (ip[i].charAt(0) === "0" || ip[i].charAt(0)==="" || ip[i].includes("\n") || ip[i].includes(" ")) {
                        nonValidChar = true;
                        break
                    } else validIp = ip[i] !== "";
                }else {
                    validIp = false
                    break
                }
            }else{
            validIp = false
                break
            }

        }
    }
    console.log(isNotNum)
    console.log(nonValidChar)
    if (isNotNum === true || nonValidChar === true){
        return false
    }else {
        return  true
    }

}
function  validIpRefactor(str){
    const  ip = str.split(".") //converts the string to an array which is seperated by the "."
    console.log(ip[3])
    console.log(String(Number(ip[3])))
    return (ip.length === 4) && // checks to see if the arrays'  length is 4
        ip.reduce((acc , ip) => //checks all the elements in the array with acc being the last one and ip the current one ex : ip[0], ip[1]
            (acc === true)&& //checks to see if the last  element was true
            (String(Number(ip)) === ip) && // checks to see nothing is wrong with the current element like space or leading zeros
            (Number(ip) >= 0) && // checks if the number of the current element is greater than zero
            (Number(ip) <= 255) // checks if the number of the current element is less than 255
        ,true)
}
let test1= '0.0.0.0'
let test2 = '59.0.176.00'
// console.log(isValidIpP(test1))
console.log(validIpRefactor(test2))