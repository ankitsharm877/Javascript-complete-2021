console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE, Number.MIN_VALUE);

console.log(0.2 + 0.4);


// convert integer to binary number
console.log((4).toString(2));
console.log((8).toString(2));

// toFixed()
console.log(20.2.toFixed(2));


//BigInt
console.log(900719925474099676n);
console.log(5n / 2n); // remove decimal places

//Number object
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Infinity);
console.log(-Infinity);
console.log(Number.isFinite(2));
console.log(Number.isFinite(Infinity));

//Math Object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(2));
console.log(Math.abs(-2), Math.abs(2));

//Math.random()
Math.random(); // give b/w 0 and 1

// give random number b/w min and max values
function randomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntNumber(5,10));


//tagged Template

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
      priceCategory = 'fairly priced';
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
    //   strings[2]
    // }`;
    return {name: productName, price: productPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;
  
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);


//Regular expression
const userEmail = 'testexample.com'; 

const regex = /^\S+@\S+\.\S+$/;
console.log(regex.test(userEmail));
console.log(regex.test('test@example.com'));