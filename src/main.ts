import { writeFileSync } from 'fs';
import * as rp from 'request-promise';
import { decodeAscii85 } from './part1/ascii85decoder';
import { extractPayloadFromText, getAssignmentFromPageHtml } from './util/htmlParser';

const url = 'https://www.tomdalling.com/toms-data-onion/';

rp(url)
  .then(function (html) {
    const assignmentText = getAssignmentFromPageHtml(html);
    const rawPayloadPart1 = extractPayloadFromText(assignmentText)
    const part1Decoded = decodeAscii85(rawPayloadPart1);
    writeFileSync("decodedPayloadPart1.txt", part1Decoded);

  })
  .catch(function (err) {
    console.error(err);
  });
