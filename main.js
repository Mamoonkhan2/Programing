var Even = {
  [Symbol.hasInstance](x) {
    return x % 2 == 0;
  }
};

function isEven(x) {
  return x instanceof Even;
}

console.log(isEven(1));
