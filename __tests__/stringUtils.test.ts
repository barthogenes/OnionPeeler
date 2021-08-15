import { applyAdobeDelimiters, cutUpString, removeAdobeDelimiters, reverseString } from '../src/util/stringUtils';

describe('stringUtils', () => {

  it('reverseString', () => {
    // Arrange, Act
    const result = reverseString("asdf");

    // Assert
    expect(result).toBe('fdsa');
  });

  it('cutUpString', () => {
    // Arrange, Act
    const result = cutUpString("abcdefghi", 3);

    // Assert
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('abc');
    expect(result[1]).toBe('def');
    expect(result[2]).toBe('ghi');
  });

  it('applyAdobeDelimiters', () => {
    // Arrange, Act
    const result = applyAdobeDelimiters("asdf");

    // Assert
    expect(result).toBe('<~asdf~>');
  });

  it('removeAdobeDelimiters', () => {
    // Arrange, Act
    const result = removeAdobeDelimiters("<~asdf~>");

    // Assert
    expect(result).toBe('asdf');
  });
});
