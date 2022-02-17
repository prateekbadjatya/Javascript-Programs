/* const reverseInt = (n)=> {
  if (Math.sign(n) === -1) {
    let no = n * -1
    return Number([...no.toString()].reverse().join('') * -1)
  } else {
     return Number([...n.toString()].reverse().join(''))
  }
} */

const reverseInt = (n)=> {
 const reversed = n.toString().split('').reverse().join('')

  if(Math.sign(n)) {
    return parseInt(reversed) * -1
  } else {
    parseInt(reversed)
  }
}

console.log(reverseInt(80500))