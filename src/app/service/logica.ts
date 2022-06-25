class logica {
  resultsArray = [
    { '0': 0 },
    { '1': 1 },
    { '2': 1 },
    { '3': 1 },
    { '4': 2 },
    { '5': 2 },
    { '6': 3 },
    { '7': 4 },
    { '8': 5 },
    { '9': 7 },
    { '10': 9 }
  ];

  generateAlticciBumber(numberInput: number) {
    if (numberInput <= 2) {
      return this.ceu(numberInput);
    } else {
      return this.mundoInvertido(numberInput);
    }
  }

  mundoInvertido(numberInput: number) {
    console.log(`------- entrando no mundo invertido -------`);
    console.log(`fazendo o a(${numberInput} - 3) + a(${numberInput} - 2)`);
    let res1 = numberInput - 3;
    let res2 = numberInput - 2;
    let product = this.calcularProduct(res1, res2);

    if (res1 > 2) {
      while (res1 > 2) {
        console.log('dentro do while 1');
        res1 = this.mundoInvertido(res1);
        console.log(res1);
      }
    } else {
      console.log('res 1 menor que 2 ');
      res1 = this.ceu(res1);
    }

    if (res2 > 2) {
      while (res2 > 2) {
        res2 = this.mundoInvertido(res2);
        console.log('dentro do while 2');
        console.log(res2);
      }
    } else {
      console.log('res 2 menor que 2 ');
      res2 = this.ceu(res2);
    }

    product = this.calcularProduct(res1, res2);

    console.log(`retornando o produto - ${product} -`);
    return product;
  }

  ceu(numberInput: number) {
    if (numberInput < 2) {
      return numberInput;
    } else if (numberInput == 2) {
      return 1;
    } else {
      return 0;
    }
  }

  calcularProduct(res1: number, res2: number) {
    return res1 + res2;
  }
}
