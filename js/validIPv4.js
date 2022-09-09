function isValidIpP(str){
    let ip = str.split(".")
    console.log(ip[3].contains("\n"))
    let validIp = false;
    console.log(ip)
    if (ip.length ===4) {
        for (let i = 0; i < ip.length; i++) {
          if (typeof parseInt(ip[i]) == "number"){
                if (ip[i] >= 0 && ip[i] <= 255) {
                    if (ip[i].length === 1 && ip[i].charAt(0) === "0") {
                        validIp = true
                        break
                    } else if (ip[i].charAt(0) === "0" || ip[i].charAt(0)===" ") {
                        validIp = false;
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
    return validIp

}
let test1 = '1.2.3.4\n'
console.log(isValidIpP(test1))