import { layer } from '../Png';
import { PNG } from 'pngjs';
const fs = require('fs');

test('We can smooosh up heartz.', done => {
   return fs.createReadStream(__dirname + '/../../assets/test/heart.png')
   .pipe(
       new PNG({
           filterType: 4,
       })
   ).on('parsed', hrt => {
       console.log("parsed!");
       console.log(hrt.height);
       console.log(hrt.width);
       hrt.pack().pipe(fs.createWriteStream('/tmp/out.png'));
       done();
   });
});
