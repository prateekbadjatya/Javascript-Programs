const capitalize = (str) => {
  let arr = str.split(' ')
  let result = ''
  for (let ch of arr) {
    console.log(ch)
    result += ch[0].toUpperCase() + ch.slice(1) + ' '
  }
  return result.trim()
}

console.log(capitalize('a short sentence'))