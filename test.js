
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("one dollar should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(156.5);

    
    // Si 1 dollar son 156.5 yens , entonces 2 euros debe ser (2 * 1.07)
    const expected = 1 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(156.5); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("one yen should be 1.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYensTopounds } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYensTopounds(0.87);

    
    // Si 1 dollar son 156.5 yens , entonces 2 euros debe ser (2 * 1.07)
    const expected = 4 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYensTopounds(4)).toBe(3.48); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})