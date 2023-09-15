

/** A string of the symbols we want to use for labels */
const symbols = "abcdefghijklmnopqrstuvqxyz0123456789".toUpperCase()

/**
 * Takes a string representation of symbols and returns a new string of just one symbol
 * @date 9/15/2023 - 1:18:53 PM
 *
 * @param {string} symbols
 * @returns {string}
 */
function randomSymbol(symbols) {
  return symbols[Math.floor(Math.random()*symbols.length)]
}


/**
 * generates a label of given length
 * @date 9/15/2023 - 1:20:37 PM
 *
 * @param {number} length
 * @returns {string}
 */
function constructLabel(length) {
  let label = Array(length)
  label = label.fill(1).map((each) => randomSymbol(symbols))
  return label.reduce((letter, group)=> letter + group)
}

{
  let labels = Array(100).fill(1).map(() => constructLabel(3))
  let final = []
  
  for (let each of new Set(labels).values()) {
    final.push(each)
  }
  
  console.log(final.toString())
  // sketchy wait for dom to load timeout function
  setTimeout(() => {
    let el = document.getElementById("labels")
    el.innerHTML = final.toString()
    
  }, 500);
}

