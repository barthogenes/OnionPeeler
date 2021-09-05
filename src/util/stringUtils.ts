export function reverseString(str: string): string {
  // Step 1. Use the split() method to return a new array
  const splitString = [...str];

  // Step 2. Use the reverse() method to reverse the new created array
  splitString.reverse();

  // Step 3. Use the join() method to join all elements of the array into a string
  // Step 4. Return the reversed string
  return splitString.join('');
}

/**
 * Cut a string up in multiple seperate substrings, each of size {length}.
 */
export function cutUpString(str: string, length: number): string[] {
  return str.match(new RegExp('(.|\n|\r){1,' + length + '}', 'g'));
}

/**
 * Applies the Adobe Version of Ascii85 delimiters to the string.
 */
export function applyAdobeDelimiters(str: string): string {
  return `<~${str}~>`
}

/**
 * Removes the Adobe Version of Ascii85 delimiters from the string.
 */
export function removeAdobeDelimiters(str: string): string {
  return /^<~(.*)~>$/s.exec(str)[1];
}
