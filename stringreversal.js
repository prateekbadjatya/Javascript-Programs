/* function reverseString (str) {
  return str.split('').reverse().join('')
} */


/* function reverseString (str) {
  let result = ''
  for (let i = str.length-1; i>= 0; i--) {
    result+= str[i]
  }
  return result
}
 */


function reverseString (str) {
  return [...str].reduce((p,i) => {
    return i + p
  }, '')
}


/* function reverseString (str) {
  let result = ''
  for (let ch of str) {
    result= ch + result
  }
  return result
} */
console.log(reverseString('HELLO'))