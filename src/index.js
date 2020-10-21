module.exports = function check(str, bracketsConfig) {
  let brackets = '(){}[]<>||1234567788';
  let stack = [];
  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);
    bracketsIndex += (bracket == brackets[bracketsIndex + 1] && stack[stack.length - 1] == (bracketsIndex + 1)) ? 1 : 0;  
    if (bracketsIndex === -1) {
      continue
    }
    if (bracketsIndex % 2 == 0) {
      stack.push(bracketsIndex + 1) 
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
