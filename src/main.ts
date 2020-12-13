import * as cheerio from 'cheerio';
import * as rp from 'request-promise';
import { Ascii85Decoder } from './decoder';

const url = 'https://www.tomdalling.com/toms-data-onion/';

rp(url)
  .then(function (html) {
    //success!
    const $ = cheerio.load(html);
    const payload = $('body > pre')
      .text()
      .split('==[ Payload ]===============================================')[1]
      .substr(0, 200);
    const decodedPayload = new Ascii85Decoder().decode(payload);
    console.log(decodedPayload);
  })
  .catch(function (err) {
    console.error(err);
  });
