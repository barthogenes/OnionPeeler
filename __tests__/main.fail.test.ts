describe('main', () => {
  it('logs error if promise failed', async () => {
    // Arrange
    const originalConsoleError = console.error;
    const mockConsoleError = jest.fn();
    console.error = mockConsoleError;
    jest.mock('request-promise', () => (
      () => Promise.reject("Fail, the promise was rejected!")
    ));

    // Act
    return import('../src/main').then(() => {
      // Assert
      expect(mockConsoleError).toHaveBeenCalledWith("Fail, the promise was rejected!");

      // Cleanup
      jest.unmock('request-promise');
      console.error = originalConsoleError;
    });
  });
});
