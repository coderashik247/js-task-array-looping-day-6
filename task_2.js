// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

let emptyArr = [];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        let addArr = (numbers[i]);
        emptyArr.push(addArr);
    }
}
console.log(emptyArr);
