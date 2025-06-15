import inquirer from 'inquirer';
import { url } from 'inspector/promises';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

inquirer
  .prompt([
    { type: "input", message: "What is the text you want to encode in the QR code?", name: 'URL' },
  ])
  .then((answers) => {
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile('URL.txt', URL, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


