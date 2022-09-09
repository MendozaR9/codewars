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
let test1 = '59.0.176.00'
console.log(isValidIpP(test1))