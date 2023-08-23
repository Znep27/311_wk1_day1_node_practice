const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const total = arr.reduce((i, current) => i + current, 0)
  return total
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let equals = false
  for (let i = 0; i < arr.length; i++) {
    for (let a = i + 1; a < arr.length; a++) {
      if (arr[i] + arr[a] == sum) {
        equals = true
      }
    }
  }
  return equals
}

module.exports = {
  isEven,
  sum,
  comboSum
}