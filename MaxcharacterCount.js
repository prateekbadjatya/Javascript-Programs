// let log = window.console.log

const maxChar = (str) => {
  let charCount = {}
  let maxChar = ''
  let maxCount = 0
  
  for (let ch of [...str.toLowerCase()]) {
    charCount[ch] =  charCount[ch] + 1 || 1
  }



  for (let props in charCount) {
    if (maxCount < charCount[props]) {
      maxCount =  charCount[props]
      maxChar = props
    }
  }

  return maxChar
}


console.log(maxChar('fdfd   fdaabbcc'))
