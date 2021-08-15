import { readFileSync } from "fs";
import { extractPayload } from "../src/util/htmlParser";

describe('htmlParser', () => {
  it('encodes Man to <~9jqo^~>', () => {
    // Arrange
    const html = readFileSync("__tests__/html.txt", 'utf8');
    const rawPayload = readFileSync("__tests__/rawPayload.txt", 'utf8');

    // Act
    const result = extractPayload(html);

    // Assert
    expect(result).toBe(rawPayload);
  });
});
