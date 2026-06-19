function calculateTax(amount) {
  let tax = amount * 0.10;
  return tax;
}
let amount = 50000;
let tax = calculateTax(amount);
console.log(tax);

function convertToUpperCase(text) {
  return text.toUpperCase();
}
let text = "hello, world!";
console.log(convertToUpperCase(text));

function isPalindrome(text1) {
    let reverse = text1.split('').reverse().join('');
    return text1 === reverse;
}
let text1 = "Racecar";
console.log(isPalindrome(text1));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}
let originalPrice = 100;
let discountPercentage = 20;
let discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
console.log(discountedPrice);