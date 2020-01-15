import {rgbToHex, matchColor} from './common';

describe( 'common', () => {

  it('Get color in hex', () => {
    const colorBlackRGB = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    const colorBlackHEX = '#000000';
    const {r, g, b} = colorBlackRGB;
    const hexColor = rgbToHex(r, g, b);
    expect(hexColor).toBe(colorBlackHEX);
  });

  it('Match colors', () => {
    const colorBlackRGB = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    const isColor = matchColor(colorBlackRGB, colorBlackRGB);
    expect(isColor).toBe(true);
  });
  }
);
