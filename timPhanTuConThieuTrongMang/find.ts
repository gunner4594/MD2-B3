
let number: number[] = [0,2,3,5,7,8,9,10]
let newArr: number[] = []
for (let i = 0; i< 11; i++) {
    if (number.indexOf(i) == -1) {
        newArr.push(i)
    }
}
console.log(newArr);