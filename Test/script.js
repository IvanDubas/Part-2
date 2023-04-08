/*const NewArray = [16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]

// 2.1  Find all numbers > 0 and find summary of it
function isBigNull(value) {
    return value > 0;
}
function summary(Array) {
    let sum = 0;
    for (i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum;
}

function multiplication(Array) {
    let sum = Array[0];
    for (i = 1; i < Array.length; i++) {
        sum = sum * Array[i];
    }
    return sum;
}



const resultPositiveNum = NewArray.filter(isBigNull)
console.log(`Кількість позитивних елементів - ${resultPositiveNum.length + 1} ; 
Їх сума - ${summary(resultPositiveNum)}`)
console.log(`Позитивні елементи : ${resultPositiveNum}`)




// 2.2 Find min number and his index
function FindMin(Array) {
    let least = Array[0];
    for (i = 1; i < Array.length; i++) {
        if (Array[i] < least) {
            least = Array[i]
        }

    }
    return least;
}

console.log(`Мінімальне число масиву - ${FindMin(NewArray)}`)


// 2.3 Find max number and his index
function FindMax(Array) {
    let biggest = Array[0];
    for (i = 1; i < Array.length; i++) {
        if (Array[i] > biggest) {
            biggest = Array[i]
        }

    }
    return biggest;
}

console.log(`Максимальне число масиву - ${FindMax(NewArray)}`)


// 2.4 Find count negative numbers
function isSmallestNull(value) {
    return value < 0;
}
const resultNegativeNum = NewArray.filter(isSmallestNull)
console.log(`Кількість негативних елементів - ${resultNegativeNum.length + 1} `);

// 2.5 Find count of odd positive numbers
function Odd(value) {
    return value % 2 !== 0
}
const resultPositiveNumOdd = NewArray.filter(isBigNull);
console.log(`Кількість непарних позитивних елементів - ` + resultPositiveNumOdd.filter(Odd).length);

// 2.6 Знайти суму парних позитивних елементів.
let sum = 0;
function Even(value) {
    if (value % 2 === 0)
        return value
}

console.log(`Сума парних позитивних елементів - ${summary(resultPositiveNumOdd.filter(Even))}`)
console.log(`Добуток позитивних елементів - ${multiplication(resultPositiveNum)}`)








function findSmallestInt(args) {
    let least = args[0];
    for (let i = 1; i < args.lenght; i++) {
        if (least > args[i]) {
            least = args[i];
        } break;

    }
    console.log(least);
}



findSmallestInt(5, 6, -3)

function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3
    if (90 <= average && average <= 100) {
        return 'A'
    } else if (80 <= average && average < 90) {
        return console.log('B')
    } else if (70 <= average && average < 80) {
        return console.log('C')
    } else if (60 <= average && average < 70) {
        return console.log('D')
    } else if (0 <= average && average < 60) {
        return console.log('F')
    }

}
getGrade(60, 82, 76)


function makeNegative(num) {
    if (num < 0) {
        return num
    } else {
        return num *= (-1)
    }
}

console.log(makeNegative(42))

function betterThanAverage(classPoints, yourPoints) {
    let summary = 0;
    for (let i = 0; i < classPoints.length; i++) {
        summary += classPoints[i]
    }
    const average = summary / classPoints.length
    if (average < yourPoints) {
        return true

    } if (average > yourPoints) {
        return false
    }
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))



function grow(num) {
    const arr = num;
    let summary = 1;

    for (let i = 0; i < arr.lenght; i++) {
        summary = summary * x
    }
    console.log(summary)
}

grow([2, 7, 3]) */

function solution(str, ending) {

    if ((str.slice(-3, -1)) === (ending.slice(-1))) return true
    else return false
}
console.log(solution('abek', 'cdek'))