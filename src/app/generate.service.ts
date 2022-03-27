import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  constructor() { }

  letterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  passGenerate = (data:any) => {  

    const firstValue = this.letterUpperCase(data.input1)
    const secondValue = this.letterUpperCase(data.input2)

    let sumIndexFirstValue = 0;
    let sumIndexSecondValue = 0;
    let letterFirstValue = [];
    let letterSecondValue = [];

    for (let i = 0; i < firstValue.length; i++) {
      if (i % 2 == 1) {
          sumIndexFirstValue += firstValue.charCodeAt(i);
          letterFirstValue.push(firstValue[i]);
      }
    } 

    for (let i = 0; i < secondValue.length; i++) {
      if (i % 2 == 0) {
          sumIndexSecondValue += secondValue.charCodeAt(i);
          letterSecondValue.push(secondValue[i].toUpperCase());
      }
    }

    letterFirstValue.reverse().join('');
    letterSecondValue.reverse().join('');
  
    const letters = letterFirstValue.concat(letterSecondValue).join('');
  
    return (`${letters}@${sumIndexFirstValue}#ALiuug!${sumIndexSecondValue}`); 

  }

}
