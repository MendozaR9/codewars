function position(letter){
    let test = "0abcdefghijklmnopqrstuvwxyz"
    let  alphabet = test.split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (letter == alphabet[i]){
            return i
        }
    }

}

console.log(position('e'))