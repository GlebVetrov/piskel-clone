import {rgbToHex, matchColor, componentToHex, hexToRgba, getPixelPos, draw} from './common';

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

  it('Component to Hex', () => {
    const colorBlackRGB = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    const {r} = colorBlackRGB;
    const component = componentToHex(r);
    expect(component).toBe('00');
  });

  it('Hex to Rgba', () => {
    const colorBlackRGB = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    const colorBlackHEX = '#000000';
    const rgbaColor = hexToRgba(colorBlackHEX);
    expect(rgbaColor).toEqual(colorBlackRGB);
  });

  it('Get Pixel position', () => {
    const position = getPixelPos(1, 1, 50);
    expect(position).toBe(204);
  });

  it('Draw algorithm', () => {
    const answer = [[1, 1]];
    const position = draw(1, 1, 1, 1);
    expect(position).toEqual(answer);
  });
  }
);
