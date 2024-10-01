const mathTools = {
  num1: 15,
  num2: 10,
  sum: function () {
    // return the sum of num1 and num2
    const nested = () => {
      console.log('nested', this.num1);
      const moreNested = () => {
        console.log('moreNested', this.num2);
      }

      moreNested();
    }

    nested();

    return this.num1 + this.num2;
  },
  difference: function () {
    // return the difference of num1 and num2 (ie. num1 - num2)
    return this.num1 - this.num2;
  }
};

const sum = mathTools.sum();
const diff = mathTools.difference();

console.log('sum', sum);
console.log('diff', diff);





function printName(userName) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const capName = capitalize(userName);

  console.log(capName);
}

// printName('bob');