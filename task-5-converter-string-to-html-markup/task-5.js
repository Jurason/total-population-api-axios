const arr1 = ['div']
const arr2 = ['h1', 'Text']
const arr3 = ['span', 'More', 'Text']
const arr4 = ['a', ['b', 'More'], 'Text']
const arr5 = ['p', '<b>Text</b>']
const arr6 = ['a', ['b', ['p', ['g', '<p>String</p>']], 'SomeText'], 'Text']
const arr7 = ['a', ['b', ['g', 'Text'], ['p', 'String', '<p>Text</p>', 'String'], 'Something'], 'Text']

function converterStringToHtmlMarkup(arr){

    function replacer(el){
        return el.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    }

    if(arr.length === 1) return`<${arr[0]}/>`
    const resultString = arr.splice(1).reduce((acc, el) => {
        Array.isArray(el) ? acc += converterStringToHtmlMarkup(el) : acc += replacer(el)
        return acc
    },'')
    return `<${arr[0]}>` + resultString + `</${arr[0]}>`
}

// function converter(arr){
//
//     function replacer(el){
//         return el.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
//     }
//
//     return `<${arr[0]}>` + arr.splice(1).reduce((acc, el) => {
//             Array.isArray(el) ? acc += `<${el[0]}>` + el.splice(1).join('') + `</${el[0]}>` : acc += replacer(el)
//             return acc
//         }, '')
//         + `</${arr[0]}>`
// }

console.log('[div] =>', converterStringToHtmlMarkup(arr1))
console.log('[h1, Text] =>', converterStringToHtmlMarkup(arr2))
console.log('[span, More, Text] =>', converterStringToHtmlMarkup(arr3))
console.log('[a, [b, More], Text] =>', converterStringToHtmlMarkup(arr4))
console.log('[p, <b>Text</b>]', converterStringToHtmlMarkup(arr5))
console.log('[a, [b, [p, [g, <p>String</p>]], SomeText], Text] =>', converterStringToHtmlMarkup(arr6))
console.log('[a, [b, [g, Text], [p, String, <p>Text</p>, String], Something], Text] =>', converterStringToHtmlMarkup(arr7))
