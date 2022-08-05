// TASK #1
// "Sum of the numbers in array" function

const testArray = [0, 1, 14, 88, -100, 11]

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
const sumOfNumbers2 = arr => arr.reduce((sum, currNum) => sum + currNum, 0)

// TASK #2
// Function which calculate count for specified position

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
const countOfFruit1 = (arr, fruit) => {
    return arr.reduce((acc, curr) => {
        if(curr.name === fruit) return acc + curr.count
        return acc
    }, 0)
}

// TASK #3
// Function which calculate count for unique position into array

const countUnique = arr => {
    const uniqueNames = []
    const result = {}
    arr.forEach(e => { if(!uniqueNames.includes(e.name)) uniqueNames.push(e.name) })
    uniqueNames.forEach(name => result[name] = countOfFruit1(arr, name))
    return result
}
const countUnique1 = arr => {
    const setNames = new Set()
    const result = {}
    arr.forEach(e => setNames.add(e.name))
    setNames.forEach(name => result[name] = countOfFruit1(arr, name))
    return result
}
const countUnique2 = arr => {
    return arr.reduce((acc, curr) => {
        const { name, count } = curr
        acc[name] = acc[name] + count || count
        return acc
    }, {})
}

// Print results

const printResults = () => {
    const uniqueNames = Object.keys(countUnique2(fruits))
    console.log('Task #1 Sum of the array numbers')
    console.log('Test array [0, 1, 14, 88, -100, 11]')
    console.log(sumOfNumbers2(testArray))
    console.log('**************************************************')
    console.log('Task #2 Function which calculate count for specified position')
    uniqueNames.forEach(e => console.log(`There are ${countOfFruit1(fruits, e)} ${e}`))
    console.log('**************************************************')
    console.log('Task #3 Function which calculate count for unique position into array')
    console.log(countUnique2(fruits))
}
printResults()
