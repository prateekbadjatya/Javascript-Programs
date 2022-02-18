const steps = (n) => {
  for(let row = 0; row<n; row++) {
    let stair = ''
    for (let coloumn = 0 ; coloumn < n; coloumn++) {
      if (row >= coloumn) {
       stair+= '#'
      } else {
        stair+= ' '
      }
    }
    console.log(stair)
  }
}

steps(3)