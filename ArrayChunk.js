const chunkArray = (arr, n) => {
  let chunk = []
  for (let element of arr) {
    let last = chunk[chunk.length - 1]
   
    if (!last || last.length === n) {
      chunk.push([element])
    } else  {
      last.push(element)
    }
  }
  return chunk
}

console.log(chunkArray([1,2,3,4], 2))