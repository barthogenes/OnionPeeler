export const ipPacketDecode = (inputStr: string): string => {
  const buf = Buffer.from(inputStr, 'ascii');
  let decodedStr = "";
  for (const val of buf) {
    decodedStr += String.fromCharCode(val);
  }
  return decodedStr;
}
