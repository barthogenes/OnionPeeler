import { readFileSync } from 'fs';
import { parseUDPHeader, UDPHeader } from '../../src/part4/udp';

// Arrange
const firstUDPHeader = Buffer.from(readFileSync("__tests__/part4/rawPayload.txt", 'utf8'), 'ascii').subarray(20, 28);

describe('parseUDPHeader', () => {
  it('parses the UDP header', () => {
    // Act
    const result = parseUDPHeader(firstUDPHeader);

    // Assert
    expect(result).toStrictEqual({
      SourcePort: 10662,
      DestinationPort: 42069,
      Length: 69,
      Checksum: 20092
    } as UDPHeader);
  });
});
