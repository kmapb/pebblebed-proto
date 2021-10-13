import { layer, Layer } from '../Png';
import { PNG } from 'pngjs';
const fs = require('fs');

const testBuffer = fs.readFileSync('./assets/test/heart.png');

function testPng(): PNG {
    return new PNG(testBuffer);
}

test('Layers upon layerz', () => {
    let base = testPng();
    let layers: Layer[] = [];
    for (var i = 1; i < 3; i++) {
        layers.push({image: base, offset: { x: i * 4, y: i * 7}});
    }
    let ret = layer(base, layers);
    fs.writeFileSync('/tmp/out.png', PNG.sync.write(ret));
});