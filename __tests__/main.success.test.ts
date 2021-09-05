import { readFileSync } from 'fs';

describe('main', () => {
  it('decodes layers', () => {
    // Arrange
    const layer1Decoded = readFileSync("Layer1-Decoded.txt", 'ascii');
    const layer2Decoded = readFileSync("Layer2-Decoded.txt", 'ascii');
    jest.mock('request-promise', () => (
      () => Promise.resolve(readFileSync("__tests__/util/html.txt", 'utf8'))
    ));
    const mockWriteFileSync = jest.fn();
    jest.mock('fs', () => ({
      writeFileSync: mockWriteFileSync
    }));

    // Act
    return import('../src/main').then(() => {
      // Assert
      expect(mockWriteFileSync).toHaveBeenNthCalledWith(1, "Layer1-Decoded.txt", layer1Decoded);
      expect(mockWriteFileSync).toHaveBeenNthCalledWith(2, "Layer2-Decoded.txt", layer2Decoded);

      // Cleanup
      jest.unmock('request-promise');
      jest.unmock('fs');
    });
  });
});
