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
console.log(dt.formatIfDatetime('previous+20'))


//===============================================================================================================================


var text = 'name[2]'

if (text.match('.*\\[[\\d.]]')) {

    var valueAndIndex = getValueAndIndex(text)


    console.log(valueAndIndex[0])
    console.log(valueAndIndex[1])
}


function getValueAndIndex(value) {
    var values = value.split('[')
    values[1] = values[1].replaceAll(']', '')
    return values
}



//===============================================================================================================================



var data = [
    ["Name", "Description", "Product"],
    ["Sam", "comment", "Resiliense"]
];

for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        console.log(data[i][j] + " ")
    }
    console.log("")
}

console.log("============================")

const osArray = [
    ["Name", "Description", "Product"],
    ["Sam", "comment", "Resiliense"]
];
const transposedOSArray = osArray[0].map((_, colIndex) => osArray.map(row => row[colIndex]));
console.log(transposedOSArray.toString());

for (var i = 0; i < transposedOSArray.length; i++) {
    console.log("Key   ==> " + transposedOSArray[i][0])
    console.log("Value ==> " + transposedOSArray[i][1])
    console.log("")
}



//===============================================================================================================================

function getValueAndIndex(value) {

    if (value.includes('[')) {
        let values = value.split('[')
        let result = values.map(x => x.replace(']', ''));
        return result
    } else {
        return value
    }

}

function switch_option(text) {

    let valueAndIndex = getValueAndIndex(text)

    if (valueAndIndex.length > 1) {
        return getValueAndIndex(text)[1]
    } else {
        return getValueAndIndex(text)[0]
    }

}


function test_enter_value(question) {

    console.log("Input ::: " + question)
    console.log('==================================')

    switch (switch_option(question)) {

        case 'suggest':
            console.log('This is for Suggest tag')
            if (question.match('.*\\[[\\d.]]')) {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : " + valueAndIndex[2])
            } else {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : 1")
            }
            break;

        case 'textarea':
            console.log('This is for Text Area tag')
            if (question.match('.*\\[[\\d.]]')) {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : " + valueAndIndex[2])
            } else {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : 1")
            }
            break;

        case 'date':
            console.log('This is for Date tag')
            if (question.match('.*\\[[\\d.]]')) {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : " + valueAndIndex[2])
            } else {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : 1")
            }
            break;

        default:
            console.log('This is for Input tag')
            if (question.match('.*\\[[\\d.]]')) {
                let valueAndIndex = getValueAndIndex(question)
                console.log("Field_name : " + valueAndIndex[0])
                console.log("Index : " + valueAndIndex[1])
            } else {
                console.log("Field_name : " + question)
                console.log("Index : 1")
            }
            break;
    }
    console.log('==================================\n')
}


const testdata = ["Input_Name", "Input_Name[3]", "Textarea_Description[textarea][2]", "Textarea_Description[textarea]", "Suggest_Lead[suggest][2]", "Suggest_Lead[suggest]", "Start_Date[date][3]", "Start_Date[date]"];


// testdata.forEach(
//     element => console.log(test_enter_value(element))
// );

test_enter_value("Input_Name")
test_enter_value("Input_Name[2]")
test_enter_value("Textarea_Description[textarea]")
test_enter_value("Textarea_Description[textarea][2]")

//===============================================================================================================================