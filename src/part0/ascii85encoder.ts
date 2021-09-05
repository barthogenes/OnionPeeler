import { applyAdobeDelimiters, cutUpString, reverseString } from '../util/stringUtils';

export const encodeAscii85 = (inputStr: string): string => {
  let paddingUsed = 0;
  let encodedStr = '';

  // Split the input string up into chunks of 4 characters.
  const chunkedString = cutUpString(inputStr, 4);

  for (const chunk of chunkedString) {
    // Keep track of the padding that gets added.
    paddingUsed += 4 - chunk.length;

    // Encode each chunk.
    encodedStr += encodeChunk(chunk.padEnd(4, "\0"));
  }

  // Strip the previously used padding from the encoded string.
  const encodedPayload = encodedStr.slice(0, encodedStr.length - paddingUsed);

  return applyAdobeDelimiters(encodedPayload);
}

const encodeChunk = (inputStr: string): string => {
  let s = '';
  const base = 85;
  let inputNum = convertStringTo32BitInteger(inputStr);

  // Converted input number is given by repeatedly dividing it by base and taking remainder
  while (inputNum > 0) {
    s += String.fromCharCode((inputNum % base) + 33);
    inputNum = Math.floor(inputNum / base);
  }

  return reverseString(s);
}

const convertStringTo32BitInteger = (str: string): number => {
  const nrArray: Uint8Array[] = [];
  for (const char of str) {
    nrArray.push(Uint8Array.from([char.charCodeAt(0)]));
  }

  const newBuffer = Buffer.concat(nrArray);
  return newBuffer.readInt32BE();
}
