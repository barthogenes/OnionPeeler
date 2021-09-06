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

  return cutUpString(validBytes, 8).map(x => String.fromCharCode(parseInt(x, 2))).join('');
}
export const parityCheck = (val: number): string => {
  const parity = val & 0b00000001;
  const data = val & 0b11111110;
  const bitCount = data.toString(2).split('').reduce((prev, curr) => (curr === '1' ? prev + 1 : prev), 0);
  const isEven = bitCount % 2 === 0;
  const isOdd = bitCount % 2 !== 0;
  if ((isEven && !parity) || (isOdd && parity)) {
    return (data >> 1).toString(2).padStart(7, '0');
  }
  return null;
}

