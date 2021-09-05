import { writeFileSync } from 'fs';
import * as rp from 'request-promise';
import { decodeAscii85 } from './part0/ascii85decoder';
import { bitshiftDecode } from './part1/bitshift-decoder';
import { paritybitDecode } from './part2/paritybit-decoder';
import { extractPayloadFromText, getAssignmentFromPageHtml } from './util/htmlParser';

const url = 'https://www.tomdalling.com/toms-data-onion/';

const main = async () => {
  try {
    const html = await rp(url);
    // Layer 0
    const assignmentText = getAssignmentFromPageHtml(html);
    const payloadLayer0 = extractPayloadFromText(assignmentText)
    const decodedLayer0 = decodeAscii85(payloadLayer0);
    writeFileSync("Layer0-Decoded.txt", decodedLayer0);

    // Layer 1
    const payloadLayer1 = extractPayloadFromText(decodedLayer0);
    const ascii85DecodedLayer1 = decodeAscii85(payloadLayer1);
    const decodedLayer1 = bitshiftDecode(ascii85DecodedLayer1);
    writeFileSync("Layer1-Decoded.txt", decodedLayer1);

    // Layer 2
    const payloadLayer2 = extractPayloadFromText(decodedLayer1);
    const ascii85DecodedLayer2 = decodeAscii85(payloadLayer2);
    const decodedLayer2 = paritybitDecode(ascii85DecodedLayer2);
    writeFileSync("Layer2-Decoded.txt", decodedLayer2);
  } catch (err) {
    console.error(err);
  }
}

main();
