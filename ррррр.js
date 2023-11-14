

// Найти сумму чисел массива

const sum = (myArr) => {
    if (myArr.length === 1) {
        return myArr[0]
    } else {
        return sum(myArr[0] + 1)
    }
}

console.log('AAA', sum(1, 2)) // 3
