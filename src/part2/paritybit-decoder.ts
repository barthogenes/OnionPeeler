import { cutUpString } from "../util/stringUtils";


export const paritybitDecode = (inputStr: string): string => {
  const buf = Buffer.from(inputStr, 'ascii');
  let validBytes = "";
  for (const val of buf) {
    const checkedVal = parityCheck(val);
    if (checkedVal) {
      validBytes += checkedVal;
    }
  }

  const bytes = cutUpString(validBytes, 8);
  return bytes.map(x => {
    return String.fromCharCode(parseInt(x, 2))
  }).join('');
}
export const parityCheck = (val: number): string => {
  const bitStrArray = val.toString(2).padStart(8, '0').split('');
  const databits = bitStrArray.slice(0, bitStrArray.length - 1);
  const paritybit = bitStrArray.slice(bitStrArray.length - 1, bitStrArray.length);
  const bitCount = databits.reduce((prev, curr) => (curr === '1' ? prev + 1 : prev), 0);
  const isEven = bitCount % 2 === 0;
  const isOdd = bitCount % 2 !== 0;
  if ((isEven && paritybit[0] === '0') || (isOdd && paritybit[0] === '1')) {
    return databits.join('');
  }
  return null;
}

