import { layer } from '../Png';
import { PNG } from 'pngjs';
const fs = require('fs');

test('We can smooosh up heartz.', async () => {
   let result = fs.createReadStream(__dirname + '/../../assets/test/heart.png')
   .pipe(
       new PNG({
           filterType: 4,
       })
   );

   console.log(result);

// .on('parsed', hrt => {
//        console.log('parsed!');
//    }).pipe(fs.createWriteStream('/tmp/out.png'));
//    return await result;
});
