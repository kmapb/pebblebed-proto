import {PNG} from 'pngjs';

export type Layer = {
    'image': PNG,
    'offset': {
        'x': number,
        'y': number
    }
};

export function layer(base: PNG, overlays: Layer[]): PNG {
    var ret = new PNG({ width: base.width, height: base.height});
    base.bitblt(ret, 0, 0, base.width, base.height, 0, 0);
    for (const layer of overlays) {
        const img = layer.image;
        let x = layer.offset.x
        let y = layer.offset.y

        if (x >= base.width) continue;
        if (y >= base.height) continue;

        let w = img.width
        let h = img.height
        if (x + w > base.width) {
            w = base.width - x
        }
        if (y + h > base.height) {
            h = base.height - y
        }
        img.bitblt(ret, 0, 0, h, w, x, y);
    }
    return ret;
}
