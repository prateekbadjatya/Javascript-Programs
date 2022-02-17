/* const palindrome = (str) => {
  return [...str].reverse().join('') === str
} */


/* const palindrome = (str) => {
  let result = ''
  for (let ch of str) {
    result = ch + result
  }
  return result === str
} */

//array.every((val) => val > 5)
const palindrome = (str) => {
  return [...str].every((ch, index, array) => {
    // console.log(ch)
    return ch == array[array.length-1 - index]
  } )
}
console.log(palindrome("madam"))