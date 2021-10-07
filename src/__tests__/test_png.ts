import { layer } from '../Png';
import { PNG } from 'pngjs';
const fs = require('fs');

test('We can smooosh up heartz.', () => {
   var heart = fs.createReadStream('../../assets/tests/heart.png'); 
   heart.on('parsed', (hrt) => {
       console.log("fun times!");
       console.log(hrt.height);
       console.log(hrt.width);
   });
});
