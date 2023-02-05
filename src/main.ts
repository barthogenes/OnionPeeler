import { writeFileSync } from 'fs';
import * as rp from 'request-promise';
import { decodeAscii85 } from './part0/ascii85decoder';
import { bitshiftDecode } from './part1/bitshift-decoder';
import { paritybitDecode } from './part2/paritybit-decoder';
import { SECRET_KEY, xOrDecode } from './part3/xor-decoder';
import { extractPayloadFromText, getAssignmentFromPageHtml } from './util/htmlParser';
import { ipPacketDecode } from './part4/ip-decoder';

const url = 'https://www.tomdalling.com/toms-data-onion/';

const main = async () => {
  try {
    const html = await rp(url);
    // Start layer 0
    const assignmentText = getAssignmentFromPageHtml(html);
    const payloadLayer0 = extractPayloadFromText(assignmentText)
    const decodedLayer0 = decodeAscii85(payloadLayer0);
    writeFileSync("Layer0-Decoded.txt", decodedLayer0);
    // End layer 0

    // Start layer 1
    const payloadLayer1 = extractPayloadFromText(decodedLayer0);
    const ascii85DecodedLayer1 = decodeAscii85(payloadLayer1);
    const decodedLayer1 = bitshiftDecode(ascii85DecodedLayer1);
    writeFileSync("Layer1-Decoded.txt", decodedLayer1);
    // End layer 1

    // Start layer 2
    const payloadLayer2 = extractPayloadFromText(decodedLayer1);
    const ascii85DecodedLayer2 = decodeAscii85(payloadLayer2);
    const decodedLayer2 = paritybitDecode(ascii85DecodedLayer2);
    writeFileSync("Layer2-Decoded.txt", decodedLayer2);
    // End layer 2

    // Start layer 3
    const payloadLayer3 = extractPayloadFromText(decodedLayer2);
    const ascii85DecodedLayer3 = decodeAscii85(payloadLayer3);
    const decodedLayer3 = xOrDecode(ascii85DecodedLayer3, SECRET_KEY);
    writeFileSync("Layer3-Decoded.txt", decodedLayer3);
    // End layer 3

    // Start layer 4
    const payloadLayer4 = extractPayloadFromText(decodedLayer3);
    const ascii85DecodedLayer4 = decodeAscii85(payloadLayer4);
    const decodedLayer4 = ipPacketDecode(ascii85DecodedLayer4);
    writeFileSync("Layer4-Decoded.txt", decodedLayer4);
    // End layer 4
  } catch (err) {
    console.error(err);
  }
}

main();
