import * as cheerio from 'cheerio';

export const extractPayloadFromText = (text: string): string => {
  return /(<~.*~>)/s.exec(text)[0].replace(/\n/g, "");
}

export const getAssignmentFromPageHtml = (html: string): string => {
  const $ = cheerio.load(html);
  return $('body > pre').text();
}
