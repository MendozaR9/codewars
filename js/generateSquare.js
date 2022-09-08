function generateSquare(int){
    let square = "";
    for (let i = 0; i < int; i++) {
        square+="+"
    }
    let row = square
    for (let i = 0; i < int-1; i++) {
            square+="\n"+row
    }
return square
}

console.log(generateSquare(1))