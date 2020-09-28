console.log(iqTest("2 4 7 8 10")); //3
console.log(iqTest("1 2 1 1")); //2

function iqTest(numbers) {
    let numbs = numbers.split(" ");
    let even = 0;

    let firstEvenPos = 0;
    let firstOddPos = 0;
    for (let i = 0; i < numbs.length; i++) {
        if (numbs[i] % 2 == 0) {
            even++;
            if (firstEvenPos == 0) firstEvenPos = i + 1;
        } else {
            if (firstOddPos == 0) firstOddPos = i + 1;
        }
    }

    if (even == 1) return firstEvenPos;
    else return firstOddPos;
}
