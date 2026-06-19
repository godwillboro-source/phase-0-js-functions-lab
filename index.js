function calculateTax(amount) {
  let tax = amount * 0.10;
  return tax;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function isPalindrome(word) {
    let reverse = word.split('').reverse().join('');
    return word === reverse;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
