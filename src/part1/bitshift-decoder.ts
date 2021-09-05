

export const bitshiftDecode = (inputStr: string): string => {
  const buf = Buffer.from(inputStr, 'ascii');
  let decodedStr = "";
  for (const val of buf) {
    const flipped = flipEverySecondBit(val);
    decodedStr += String.fromCharCode(rotateRight(flipped, 1));
  }
  return decodedStr;
}

export const flipEverySecondBit = (val: number): number => {
  const mask = parseInt('1010101', 2);
  return val ^ mask;
}

export const rotateRight = (val: number, rotateBy: number): number => {
  const lsb = val & 0b00000001;
  return (val >> rotateBy) | (lsb << (8 - rotateBy));
}
