const pyramid = (n) => {
  for (let row = 0; row < n; row++){
    let str = ''
    for (let coloumn = 0; coloumn < (2*n - 1); coloumn++){
       if (Math.floor((2*n-1)/2) - row <=coloumn && Math.floor((2*n-1)/2) + row >=coloumn) {
         str=str + '#'
       } else {
         str=str + ' '
       }
    }
    console.log(str)
  }
}
pyramid(4)