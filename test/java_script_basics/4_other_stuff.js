//const moment = require("moment");
const moment = require('moment-timezone');

//--------------------------------------------------------------------------------------------------

var timeZone = "Asia/Colombo"

function formatIfDatetime(text){

    switch(text){

        case 'now':
			return getCurrentDateTime(timeZone, 'yyyy/MM/DD HH:mm:ss')

		case 'today':
			return getCurrentDateTime(timeZone, 'yyyy/MM/DD')

		case 'future':
			return getFutureDate(1, timeZone, 'yyyy/MM/DD')

		case 'previous':
			return getPreviousDate(1, timeZone, 'yyyy/MM/DD')

        case 'yesterday':
			return getPreviousDate(1, timeZone, 'yyyy/MM/DD HH:mm:ss')

        case 'previous hour':
            return getPreviousTime(1, 0, timeZone, 'HH:mm:ss')
        
        case 'future hour':
            return getFutureTime(1, 0, timeZone, 'HH:mm:ss')   
            
        case 'previous time':
            return getPreviousTime(0, 30, timeZone, 'HH:mm:ss')
            
        case 'future time':
            return getFutureTime(0, 30, timeZone, 'HH:mm:ss')  
        
        case 'today dd':
            return getCurrentDateTime(timeZone, 'DD')

        default:

            if (text.match("^now HH\\-\\d{1,2}$")) {                
                var change = text.split('now HH-');
			    return getPreviousTime(parseInt(change[1]), 0, timeZone, 'HH:mm:ss');
            }

            else if(text.match("^now HH\\+\\d{1,2}$")){
                var change = text.split('now HH+');
			    return getFutureTime(parseInt(change[1]), 0, timeZone, 'HH:mm:ss');
            }

            else if(text.match("^now mm\\-\\d{1,2}$")){
                var change = text.split('now mm-');
			    return getPreviousTime(0, parseInt(change[1]), timeZone, 'HH:mm:ss');
            }

            else if(text.match("^now mm\\+\\d{1,2}$")){
                var change = text.split('now mm+');
			    return getFutureTime(0, parseInt(change[1]), timeZone, 'HH:mm:ss');
            }

            else if(text.match("^future\\+\\d{1,2}$")){
                var change = text.split('future+');
                return getFutureDate(parseInt(change[1]), timeZone, 'yyyy/MM/DD');
            }

            else if(text.match("^previous\\+\\d{1,2}$")){
                var change = text.split('previous+');
                return getPreviousDate(parseInt(change[1]), timeZone, 'yyyy/MM/DD');
            }

			return text;
    }
  
}


function getCurrentDateTime(timeZone, format){
    return moment().tz(timeZone).format(format);
}

function getFutureDate(noOfDays, timeZone, format){

    var forwardDays = new moment().tz(timeZone).add(noOfDays,'day')
    return forwardDays.format(format);
}

function getPreviousDate(noOfDays, timeZone, format){

    var backwardDays = new moment().tz(timeZone).subtract(noOfDays,'day')
    return backwardDays.format(format);
}

function getPreviousTime(hrs, mins, timeZone, format){

    var backwardTime = new moment().tz(timeZone).subtract(hrs,'h').subtract(mins,'m');
    return backwardTime.format(format);
}

function getFutureTime(hrs, mins, timeZone, format){

    var forwardTime = new moment().tz(timeZone).add(hrs,'h').add(mins,'m');
    return forwardTime.format(format);
}

console.log(formatIfDatetime('now'))
console.log(formatIfDatetime('today'))
console.log(formatIfDatetime('today dd'))
console.log(formatIfDatetime('future'))
console.log(formatIfDatetime('previous'))
console.log(formatIfDatetime('yesterday'))

console.log(formatIfDatetime('previous hour'))
console.log(formatIfDatetime('future hour'))
console.log(formatIfDatetime('previous time'))
console.log(formatIfDatetime('future time'))

console.log(formatIfDatetime('now HH-2'))
console.log(formatIfDatetime('now HH+3'))

console.log(formatIfDatetime('now mm+30'))
console.log(formatIfDatetime('now mm-30'))

console.log(formatIfDatetime('future+30'))
console.log(formatIfDatetime('previous+30'))



//npm i moment
//npm i moment-timezone

