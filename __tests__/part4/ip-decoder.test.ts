import { readFileSync } from 'fs';
import { ipPacketDecode } from '../../src/part4/ip-decoder';

describe('ipPacketDecode', () => {
  it('decodes the payload', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part4/rawPayload.txt", 'utf8');

    // Act
    const result = ipPacketDecode(rawPayload);

    // Assert
    expect(result).toBe(readFileSync("Layer4-Decoded.txt", 'ascii'));
  });
});
