var DateTime = require('../Keywords/DateTime.js');

var dt = new DateTime();

console.log(dt.formatIfDatetime('now'))
console.log(dt.formatIfDatetime('today'))
console.log(dt.formatIfDatetime('today dd'))
console.log(dt.formatIfDatetime('future'))
console.log(dt.formatIfDatetime('previous'))
console.log(dt.formatIfDatetime('yesterday'))

console.log(dt.formatIfDatetime('previous hour'))
console.log(dt.formatIfDatetime('future hour'))
console.log(dt.formatIfDatetime('previous time'))
console.log(dt.formatIfDatetime('future time'))

console.log(dt.formatIfDatetime('now HH-2'))
console.log(dt.formatIfDatetime('now HH+3'))
console.log(dt.formatIfDatetime('now mm+30'))
console.log(dt.formatIfDatetime('now mm-30'))

console.log(dt.formatIfDatetime('future+30'))
console.log(dt.formatIfDatetime('previous+30'))


var text = 'name[2]'

if(text.match('.*\\[[\\d.]]')){

    var valueAndIndex = getValueAndIndex(text)

    
    console.log(valueAndIndex[0])
    console.log(valueAndIndex[1])
}


function getValueAndIndex(value){
    var values = value.split('[')
    values[1] = values[1].replaceAll(']', '')
    return values
}
