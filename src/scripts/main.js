console.log("hi there")

let currentNumber = "chicken";

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        let currentNumber = "chickenMonkey"
        console.log(currentNumber);
}  else if(currentNumber % 7 === 0) {
        let currentNumber = "monkey";
        console.log(currentNumber)
} else if(currentNumber % 5 === 0)  {
        let currentNumber = "chicken";
        console.log(currentNumber)
}  else {
        console.log(currentNumber);
}
}
