import * as xml2js from 'xml2js';

export default function xml2jsPromise (xml, opts) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, opts, (err, res) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(res);
      }
    });
  });
};
