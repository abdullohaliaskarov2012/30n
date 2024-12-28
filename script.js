let fruits = [2, 4, 5, 7, 8];

for (let fruit of fruits) {
    if (fruit%2==0){
        console.log(fruit)
    }
}
// ===================================
let arr=[]

for (let i=0; i<=fruits.length; i++) {
    if (fruits[i]%2==0){
        arr.push(fruits[i])
    }
}
console.log(arr)
// ===================================
