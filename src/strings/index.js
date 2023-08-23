const split = (str, delim) => {
  // write code for strings.split
  const arr = str.split(delim)
  return arr
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairArr = []
  let a = 0
  for (let i = 0; i < str.length; i = i + 2) {
    pairArr[a] = str.slice(i, i + 2)
    a++
  }
  return pairArr
}

const reverse = (str) => {
  // write code for strings.reverse
  let reverseArr = str.split('')
  reverseArr = reverseArr.reverse()
  str = reverseArr.join('')
  return str
}

module.exports = {
  split,
  pairs,
  reverse
}