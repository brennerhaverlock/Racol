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

class ColorSet {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}
const presets = [


    preset1 = [
    new ColorSet('Jazzberry Jam', '#AA1155'),
    new ColorSet('Pansy Purple', '#880044'),
    new ColorSet('Raspberry', '#DD1155'),
    new ColorSet('Yellow Crayola', '#FFEE88'),
    new ColorSet('Caribbean Grean', '#00CC99'),
  ],

   preset2 = [
    new ColorSet('Cadet Blue Crayola', '#AAABBC'),
    new ColorSet('Middle Grey', '#8B8982'),
    new ColorSet('Charcoal', '#373F47'),
    new ColorSet('Blue Gray', '#6C91C2'),
    new ColorSet('Periwinkle Crayola', '#C3C9E9'),
  ],

  preset3 = [
    new ColorSet('Honeydew', '#DDF8E8'),
    new ColorSet('Light Gray', '#CDD5D1'),
    new ColorSet('Black Shadows', '#B4A6AB'),
    new ColorSet('Mountbatten Pink', '#946E83'),
    new ColorSet('Dark Liver', '#615055'),
  ],

  preset4 = [
    new ColorSet('Plump Purple', '#52489C'),
    new ColorSet('True Blue', '#4062BB'),
    new ColorSet('Maximum Blue Green', '#59C33'),
    new ColorSet('Platinum', '#EBEBEB'),
    new ColorSet('Fiery Rose', '#F45B69'),
  ],

  preset5 = [
    new ColorSet('Aero', '#87BCDE'),
    new ColorSet('Mauve Taupe', '#805E73'),
    new ColorSet('Independence', '#4E4D5C'),
    new ColorSet('Charcoal', '#2D4654'),
    new ColorSet('Dark Charcoal', '#243B4A'),
  ],

  preset6 = [
    new ColorSet('Redish', '#B80C09'),
    new ColorSet('Seat Brown', '#6B2B06'),
    new ColorSet('Platinum', '#E5E7E6'),
    new ColorSet('Gray X 11 Gray', '#B7B5B3'),
    new ColorSet('Black Choclate', '#141301'),
  ],


  
  
]

const all_colors = () => {

  all_colors = [
    new ColorSet('1 Redish', '#B80C09'),
    new ColorSet('2 Seat Brown', '#6B2B06'),
    new ColorSet('3 Platinum', '#E5E7E6'),
    new ColorSet('4 Gray X 11 Gray', '#B7B5B3'),
    new ColorSet('5 Black Choclate', '#141301'),
    new ColorSet('6 Aero', '#87BCDE'),
    new ColorSet('7 Mauve Taupe', '#805E73'),
    new ColorSet('8 Independence', '#4E4D5C'),
    new ColorSet('9 Charcoal', '#2D4654'),
    new ColorSet('10 Dark Charcoal', '#243B4A'),
    new ColorSet('11Plump Purple', '#52489C'),
    new ColorSet('12 True Blue', '#4062BB'),
    new ColorSet('13 Maximum Blue Green', '#59C33'),
    new ColorSet('14 Platinum', '#EBEBEB'),
    new ColorSet('15 Fiery Rose', '#F45B69'),
    new ColorSet('16 Honeydew', '#DDF8E8'),
    new ColorSet('17 Light Gray', '#CDD5D1'),
    new ColorSet('18 Black Shadows', '#B4A6AB'),
    new ColorSet('19 Mountbatten Pink', '#946E83'),
    new ColorSet('20 Dark Liver', '#615055'),
    new ColorSet('21 Cadet Blue Crayola', '#AAABBC'),
    new ColorSet('22 Middle Grey', '#8B8982'),
    new ColorSet('23 Charcoal', '#373F47'),
    new ColorSet('24 Blue Gray', '#6C91C2'),
    new ColorSet('25 Periwinkle Crayola', '#C3C9E9'),
    new ColorSet('26 Jazzberry Jam', '#AA1155'),
    new ColorSet('27 Pansy Purple', '#880044'),
    new ColorSet('28 Raspberry', '#DD1155'),
    new ColorSet('29 Yellow Crayola', '#FFEE88'),
    new ColorSet('30 Caribbean Grean', '#00CC99'),

  ]
}

const getAllColors = () => {
  console.log(all_colors)
}

const getRandomColor = () => {
  return presets[Math.floor(Math.random() * presets.length)][Math.floor(Math.random() * presets.length)];
}

const getRandomColorSet = () => {
  return presets[Math.floor(Math.random() * presets.length)]
}


exports.presets = presets;


module.exports = {
  randomnum,
  replace_space_dash,
  getRandomColor,
  getRandomColorSet,
  all_colors,
  getAllColors,
  presets

}

