import { readFileSync } from 'fs';
import { findKey, SECRET_KEY, xOrDecode } from '../../src/part3/xor-decoder';

describe('xOrDecode', () => {
  it('decodes the payload', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part3/rawPayload.txt", 'utf8');

    // Act
    const result = xOrDecode(rawPayload, SECRET_KEY);

    // Assert
    expect(result).toBe(readFileSync("Layer3-Decoded.txt", 'ascii'));
  });
});

describe('findKey', () => {
  it('finds the key', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part3/rawPayload.txt", 'utf8');
    const specialIndex = 3456;
    const encryptedStr = rawPayload.slice(specialIndex, specialIndex + 32);
    const decryptedStr = "necessary.\n\n\n==[ Payload ]======";

    // Act
    const key = findKey(encryptedStr, decryptedStr);

    // Assert
    expect(key).toStrictEqual(SECRET_KEY);
  });
});
