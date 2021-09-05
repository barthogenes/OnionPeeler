import { readFileSync } from 'fs';
import { bitshiftDecode, flipEverySecondBit, rotateRight } from '../../src/part2/bitshift-decoder';

describe('bitshiftDecode', () => {
  it('decodes the payload', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part2/rawPayload.txt", 'utf8');

    // Act
    const result = bitshiftDecode(rawPayload);

    // Assert
    expect(result).toBe(readFileSync("Layer2-Decoded.txt", 'ascii'));
  });
});

describe('flipEverySecondBit', () => {
  it('flips every second bit from 1 to 0', () => {
    // Arrange, Act
    const result = flipEverySecondBit(0b01010101);

    // Assert
    expect(result).toBe(0b00000000);
  });

  it('flips every second bit from 0 to 1', () => {
    // Arrange, Act
    const result = flipEverySecondBit(0b10101010);

    // Assert
    expect(result).toBe(0b11111111);
  });
});

describe('rotateRight', () => {
  it('rotates bit one spot to the right', () => {
    // Arrange, Act
    const result = rotateRight(0b00001000, 1);

    // Assert
    expect(result).toBe(0b00000100);
  });

  it('rotates back to the beginning of the bit string', () => {
    // Arrange, Act
    const result = rotateRight(0b00001001, 2);

    // Assert
    expect(result).toBe(0b01000010);
  });
});
