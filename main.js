function arrAdder(arr) {
    result = arr.reduce((a, b) => a.map((v, i) => v + b[i]))
    return result.join(' ')
  }

  arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ]) 