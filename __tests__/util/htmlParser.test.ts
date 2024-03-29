import { readFileSync } from "fs";
import { extractPayloadFromText, getAssignmentFromPageHtml } from "../../src/util/htmlParser";

describe('htmlParser', () => {
  it('encodes Man to <~9jqo^~>', () => {
    // Arrange
    const html = readFileSync("__tests__/util/html.txt", 'utf8');
    const rawPayload = readFileSync("__tests__/part0/rawPayload.txt", 'utf8');

    // Act
    const result = extractPayloadFromText(getAssignmentFromPageHtml(html));

    // Assert
    expect(result).toBe(rawPayload);
  });
});
