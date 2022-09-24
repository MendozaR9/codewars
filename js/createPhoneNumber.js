function createPhoneNumber(number){
    let phoneNum = "("
    for (let i = 0; i < number.length; i++) {
        if (i === 3){
            phoneNum+=") "
        }if (i===6){
            phoneNum +="-"
        }
        phoneNum+=number[i]
    }
    return phoneNum
}
let test = [1,2,3,4,5,6,7,8,9,0]
console.log(createPhoneNumber(test));