//random num const package
const randomnum = () => {
  function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

  console.log(randomIntInc)
}

const replace_space_dash = (input) => {
      var str = input;
 
      var newStr = str.split("");
      
      if (typeof str === 'string'){
      // Traverse the string character by character.
      for (var i = 0; i < newStr.length; ++i) {
        // Changing to '-' if it's a space. 
        if (newStr[i] === " ") {
          newStr[i] = "-";
        }
      }
    } else {
      console.log("please enter a string")
    }
}

module.exports = {
  randomnum
}