import { cutUpString, removeAdobeDelimiters, reverseString } from "../util/stringUtils";


export const decodeAscii85 = (inputStr: string): string => {
  let paddingUsed = 0;
  let decodedStr = "";

  // Split the input string up into chunks of 5 characters.
  const chunkedString = cutUpString(removeAdobeDelimiters(inputStr), 5);

  for (const chunk of chunkedString) {
    // Keep track of the padding that gets added.
    paddingUsed += 5 - chunk.length;

    // Encode each chunk.
    decodedStr += decodeChunk(chunk.padEnd(5, 'u'));
  }

  // Strip the previously used padding from the decoded string and return.
  return decodedStr.slice(0, decodedStr.length - paddingUsed);
}

const decodeChunk = (inputStr: string): string => {
  const s = reverseString(inputStr);
  const base = 85;
  let inputNum = 0;
  for (let index = 0; index < s.length; index++) {
    inputNum += (s.charCodeAt(index) - 33) * Math.pow(base, index);
  }
  return convert32BitIntegerToString(inputNum);
}

const convert32BitIntegerToString = (num: number): string => {
  const buf = new DataView(Uint32Array.from([num]).buffer);
  let s = '';
  for (let index = buf.byteLength - 1; index >= 0; index--) {
    s += String.fromCharCode(buf.getUint8(index));
  }

  return s;
}
