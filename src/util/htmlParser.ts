import * as cheerio from 'cheerio';

export const extractPayload = (html: string): string => {
  const $ = cheerio.load(html);
  const page = $('body > pre').text();
  return /(<~.*~>)/s.exec(page)[0].replace(/\n/g, "");
}
