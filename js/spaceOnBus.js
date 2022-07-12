function enough(cap, on ,wait){

    if (on + wait <= cap){
    return 0
    }else {
        return (on+wait) - cap
    }

}
let cap = 10
let on = 5
let wait = 5
console.log(enough(cap, on, wait))