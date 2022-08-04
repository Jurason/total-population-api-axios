// TASK #1
// "Sum of the numbers in array" function

const sumOfNumbers = arr => {
    let sum = 0
    arr.map(e => sum += e)
    return sum
}
const sumOfNumbers1 = arr => {
    let sum = 0
    arr.forEach(e => sum += e)
    return sum
}
const sumOfNumbers2 = arr => arr.reduce((sum, currNum) => sum + currNum)

// TASK #2

const fruits = [
    { name: 'banana', count: 23 },
    { name: 'apple', count: 5 },
    { name: 'banana', count: 7 },
    { name: 'cherry', count: 0 },
    { name: 'tomato', count: 52 },
    { name: 'tomato', count: 33 },
    { name: 'tomato', count: 12 },
]

const countOfFruit = (arr, fruit) => {
    let count = 0
    arr.map(e => { if (e.name === fruit) count += e.count })
    return count
}

console.log(countOfFruit(fruits, 'tomato'));    // 97
console.log(countOfFruit(fruits, 'cherry'));    // 0
console.log(countOfFruit(fruits, 'apple'));     // 5
console.log(countOfFruit(fruits, 'banana'));    // 30

// TASK #3
// Function which calculate count for unique position into array

const countUnique = arr => {
    const uniqueNames = []
    const result = {}
    arr.forEach(e => { if(!uniqueNames.includes(e.name)) uniqueNames.push(e.name) })
    uniqueNames.forEach(name => result[name] = countOfFruit(arr, name))
    return result
}
const countUnique1 = arr => {
    const setNames = new Set()
    const result = {}
    arr.forEach(e => setNames.add(e.name))
    setNames.forEach(name => result[name] = countOfFruit(arr, name))
    return result
}

console.log(countUnique1(fruits))