/* const anagram = (stringA, stringB) => {
  return [...stringA.toLowerCase().replace(/[^\w]/gi, '')].sort().join() === [...stringB.toLowerCase().replace(/[^\w]/gi, '')].sort().join()
} */

const anagram = (stringA, stringB) => {
  let charMapA = {}
  let charMapB = {}

  let st1 = stringA.toLowerCase().replace(/[^\w]/gi, '')
  let st2 = stringB.toLowerCase().replace(/[^\w]/gi, '')
  for (let ch of [...st1].sort()) {
    charMapA[ch] =  charMapA[ch] +1 || 1
  }
  for (let ch of [...st2].sort()) {
    charMapB[ch] =  charMapB[ch] +1 || 1
  }

  return JSON.stringify(charMapA) === JSON.stringify(charMapB)
}
// console.log(anagram('Hi there', 'Bye there'))
console.log(anagram('!! rnail sannfety', 'fnnairy tales'))