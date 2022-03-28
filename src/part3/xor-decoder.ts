export const SECRET_KEY = [108, 36, 132, 142, 66, 25, 168, 225, 197, 219, 87, 101, 185, 198, 20, 158, 165, 25, 53, 150, 59, 57, 127, 165, 101, 209, 254, 1, 133, 125, 217, 76];


export const xOrDecode = (inputStr: string, secretKey: number[]): string => {
  const buf = Buffer.from(inputStr, 'ascii');
  let decodedStr = "";
  let i = 0;
  for (const val of buf) {
    const xored = val ^ secretKey[i];
    i++;
    if (i >= secretKey.length) {
      i = 0;
    }

    decodedStr += String.fromCharCode(xored);
  }
  return decodedStr;
}


export const findKey = (encryptedStr: string, decryptedStr: string): number[] => {
  const strLength = Math.min(encryptedStr.length, decryptedStr.length);
  const buf = Buffer.from(encryptedStr, 'ascii');
  const key = [];
  for (let i = 0; i <= strLength; i++) {
    for (let j = 0; j <= 255; j++) {
      const r = String.fromCharCode(buf[i] ^ j);
      if (r === decryptedStr[i]) {
        key.push(j);
        break;
      }
    }
  }

  return key;
}
