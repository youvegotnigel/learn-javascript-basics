//const data = ['3', 'Jaime', 'Lannister', '45', 'Jaime Lannister']
const data = ['D-4456', 'Soybeans', 'Elijah James', 'lodufbus@ruvetar.bm', '50,163', '85.611 %' ,'Filled']

let updatedData = prepareValue(data)

let myxpath = prepareRowXpath(updatedData)

console.log(myxpath)

function prepareRowXpath(cellInfo){

    var xpath = ''
    var count=1

    cellInfo.forEach(element => {

        var translateText = './/*[translate(normalize-space(.), \'ABCDEFGHIJKLMNOPQRSTUVWXYZ\', \'abcdefghijklmnopqrstuvwxyz\') = \''+element+'\']'

        if(count == cellInfo.length){
            xpath = xpath.concat(translateText)
        }else{
            xpath = xpath.concat(translateText, ' and ')
        }
        count = count + 1
    });

    let tag = '(//div[@role=\'grid\'])[2]/descendant-or-self::div[@role=\'row\']/descendant-or-self::div[' + xpath + ']'

    return tag
}


function prepareValue(arguments) {

    let a = []

    for(var i=0; i<arguments.length; i++){
        //let stripedText = arguments[i].replace(/\s+/g, '')
        let stripedText = arguments[i].trim()
        a.push(stripedText.toLowerCase())
    }
    return a; 
}
