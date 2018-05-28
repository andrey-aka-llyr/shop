import { Injectable } from '@angular/core';

class Range {
  constructor(
    public from: number,
    public to: number
  ) {
  }

  get length(): number {
    return this.to - this.from;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private alphabet: Array<Range>;
  private totalLength: number;

  constructor() {
    this.alphabet = [
      new Range(48, 58),
      new Range(65, 91),
      new Range(97, 122)
    ];

    this.totalLength = 0;
    this.alphabet.forEach(x => this.totalLength += x.length);
  }

  getSequence(length: number): string  {
    const result = [];
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * this.totalLength);
      for (let j = 0; j < this.alphabet.length; j++) {
        if (index < this.alphabet[j].length) {
          result.push(String.fromCharCode(this.alphabet[j].from + index));
          break;
        } else {
          index -= this.alphabet[j].length;
        }
      }
    }
    return result.join('');
  }
}
