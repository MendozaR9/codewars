function reverseWord(string){
    return string.split(" ").reverse().join(" ")
}
let test = "This is a test to see if the words in the string is revered correctly"
console.log(test)
console.log(reverseWord(test))