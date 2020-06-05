let calculator = {

  read: function () {
    this.a = +prompt("Give a value to 'a' ", 0);
    this.b = +prompt("Give a value to 'b' ", 0);  
  },
  
  sum: function() {
  return this.a + this.b;
  },

  multiply: function () {
  return this.a * this.b;
  }
  
};

calculator.read();
alert( "The sum of 'a' and 'b' is:" + calculator.sum() );
alert( "The multiply of 'a' and 'b' is:" + calculator.multiply() );