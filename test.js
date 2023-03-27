
test("Ten euros should be 12 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    // if 1 euro is 1.2 dollars, then 10 euros should be (10 * 1.2)
    const dollars = fromEuroToDollar(10)
    const expected = 12; 
    // this is the comparison for the unit test
    expect(fromEuroToDollar(10)).toBe(12);//1 euro is 1.2 dollars, then 10 euros should be = (10 * 1.2) = 12
});

test("Ten dollars should be 1065.83 yens dollars", function(){
    const { fromDollarToYen } = require('./app.js')
    // if 1 euro is 1.2 dollars, then 10 euros should be (10 * 1.2)
    const yens = fromDollarToYen(10)
    const expected = 1065.83; 
    // this is the comparison for the unit test
    expect(fromDollarToYen(10)).toBe(1065.8333333333335);//1 euro is 1.2 dollars, then 10 euros should be = (10 * 1.2) = 12
});

