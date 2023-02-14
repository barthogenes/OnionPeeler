import { readFileSync } from 'fs';
import { IPv4Header, parseIPv4Header, validateIPv4Header } from '../../src/part4/ipv4';

// Arrange
const firstIPv4Header = Buffer.from(readFileSync("__tests__/part4/rawPayload.txt", 'utf8'), 'ascii').subarray(0, 20);

describe('parseIPv4Header', () => {
  it('parses the IPv4 header', () => {
    // Act
    const result = parseIPv4Header(firstIPv4Header);

    // Assert
    expect(result).toStrictEqual({
      Version: 4,
      IHL: 5,
      DSCP: 0,
      ECN: 0,
      TotalLength: 89,
      Identification: 0,
      Flags: 2,
      FragmentOffset: 0,
      TTL: 32,
      Protocol: 17,
      HeaderChecksum: 0x43c1,
      SourceIP: [
        10,
        1,
        1,
        10
      ],
      DestinationIP: [
        10,
        1,
        1,
        200
      ]
    } as IPv4Header);
  });
});

describe('validateIPv4Header', () => {
  it('validates the IPv4 header', () => {
    // Act
    const result = validateIPv4Header(firstIPv4Header);
  
    // Assert
    expect(result).toBe(false);
  });
});

