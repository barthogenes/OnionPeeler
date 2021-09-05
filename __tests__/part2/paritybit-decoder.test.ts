import { readFileSync } from 'fs';
import { paritybitDecode, parityCheck } from '../../src/part2/paritybit-decoder';

describe('paritybitDecode', () => {
  it('decodes the payload', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part2/rawPayload.txt", 'utf8');

    // Act
    const result = paritybitDecode(rawPayload);

    // Assert
    expect(result).toBe(readFileSync("Layer2-Decoded.txt", 'ascii'));
  });
});

describe('parityCheck', () => {
  it('returns the most significant 7 bits if the parity check succeeds - even', () => {
    // Arrange, Act
    const result = parityCheck(0b10100011);

    // Assert
    expect(result).toBe('1010001');
  });

  it('returns the most significant 7 bits if the parity check succeeds - odd', () => {
    // Arrange, Act
    const result = parityCheck(0b00110000);

    // Assert
    expect(result).toBe('0011000');
  });

  it('returns zero if the parity check fails', () => {
    // Arrange, Act
    const result = parityCheck(0b10100010);

    // Assert
    expect(result).toBeNull()
  });
});
