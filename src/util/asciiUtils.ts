export function convert4charactersTo32BitInt(str: string): number {
  if (str.length > 4) throw 'str length should be max 4!';
  if (str.length < 4) {
    const padding = new Array(4 - str.length);
    padding.fill('\0');
    str += padding.join('');
  }

  const nrArray: Uint8Array[] = [];
  for (let index = 0; index < 4; index++) {
    const char = str[index];
    nrArray.push(Uint8Array.from([char.charCodeAt(0)]));
  }

  const newBuffer = Buffer.concat(nrArray);
  return newBuffer.readInt32BE();
}
