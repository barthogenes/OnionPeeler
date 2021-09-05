import { writeFileSync } from 'fs';
import * as rp from 'request-promise';
import { decodeAscii85 } from './part1/ascii85decoder';
import { bitshiftDecode } from './part2/bitshift-decoder';
import { extractPayloadFromText, getAssignmentFromPageHtml } from './util/htmlParser';

const url = 'https://www.tomdalling.com/toms-data-onion/';

const main = async () => {
  try {
    const html = await rp(url);
    // Layer 1
    const assignmentText = getAssignmentFromPageHtml(html);
    const payloadLayer1 = extractPayloadFromText(assignmentText)
    const decodedLayer1 = decodeAscii85(payloadLayer1);
    writeFileSync("Layer1-Decoded.txt", decodedLayer1);

    // Layer 2
    const payloadLayer2 = extractPayloadFromText(decodedLayer1);
    const ascii85DecodedLayer2 = decodeAscii85(payloadLayer2);
    const decodedLayer2 = bitshiftDecode(ascii85DecodedLayer2);
    writeFileSync("Layer2-Decoded.txt", decodedLayer2);
  } catch (err) {
    console.error(err);
  }
}

main();
