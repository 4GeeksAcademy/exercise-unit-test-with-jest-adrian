// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromYensTopounds = function(valueInYens) {
    // Convertimos el valor a dólares
    let valueInPounds = valueInYens * 0.87;
    // Retornamos el valor en dólares
    return valueInPounds;
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



module.exports = { fromEuroToDollar , fromDollarToYen, fromYensTopounds}