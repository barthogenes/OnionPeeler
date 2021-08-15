import { writeFileSync } from 'fs';
import * as rp from 'request-promise';
import { Ascii85Decoder } from './ascii85/decoder';
import { extractPayload } from './util/htmlParser';

const url = 'https://www.tomdalling.com/toms-data-onion/';

rp(url)
  .then(function (html) {
    const rawPayload = extractPayload(html)
    const decodedPayload = new Ascii85Decoder().decode(rawPayload);
    writeFileSync("decodedPayload.txt", decodedPayload);
  })
  .catch(function (err) {
    console.error(err);
  });
