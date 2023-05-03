function number(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9)
}
console.log(number(150));


function numbers(oddNum) {
    for (i = 1; i <= oddNum; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
numbers(10);


let array = [4, 5, 6, 7, 8];

function arrayFunc(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}

arrayFunc(array);