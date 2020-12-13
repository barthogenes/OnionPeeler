import { convert4charactersTo32BitInt } from './util/asciiUtils';
import { reverseString } from './util/stringUtils';

export class Ascii85Encoder {
  public encode(inputStr: string): string {
    const charArray = [...inputStr];
    let encodedStr = '';
    while (charArray.length > 0) {
      const s = charArray.splice(0, 4).join('');
      encodedStr += this.encodeTo5characters(s);
    }
    const encodedPayload = this.stripPadding(encodedStr, inputStr.length);
    return `<~${encodedPayload}~>`;
  }

  private stripPadding(encodedStr: string, inputStrLength: number) {
    if (inputStrLength === 4) return encodedStr;

    const paddingRequired = 4 - (inputStrLength % 4);
    if (paddingRequired) {
      return encodedStr.slice(0, encodedStr.length - paddingRequired);
    }

    return encodedStr;
  }

  public encodeTo5characters(inputStr: string): string {
    let s = '';
    const base = 85;
    let inputNum = convert4charactersTo32BitInt(inputStr);

    // Convert input number is given
    // base by repeatedly dividing it
    // by base and taking remainder
    while (inputNum > 0) {
      s += String.fromCharCode((inputNum % base) + 33);
      inputNum = Math.floor(inputNum / base);
    }

    // Reverse the result
    return reverseString(s);
  }
}
