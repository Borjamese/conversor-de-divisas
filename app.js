// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 127.9/1.2;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * (1/127.9) * 0.8;
    //return the dollar value
    return valueInPound;
}



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }