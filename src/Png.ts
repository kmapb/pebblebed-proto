import {PNG} from 'pngjs';

type Layer = {
    'image': PNG,
    'offset': {
        'x': number,
        'y': number
    }
};

export function layer(base: PNG, overlays: [Layer]) {
    var ret = new PNG({ width: base.width, height: base.height});
    base.bitblt(ret, 0, 0, base.width, base.height, 0, 0);
    for (const layer of overlays) {
        const img = layer.image;
        img.bitblt(ret, 0, 0, img.height, img.width, layer.offset.x, layer.offset.y);
    }
    return ret;
}
