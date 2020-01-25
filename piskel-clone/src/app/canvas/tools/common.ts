export function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgba(hex: string): {r: number, g: number, b: number, a: number} | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 255
  } : null;
}

export function getPixelPos(x: number, y: number, canvasSize: number) {
  return (y * canvasSize + x) * 4;
}

export function matchStartColor(data, pos, startColor): boolean {
  return (data[pos]   === startColor.r &&
    data[pos + 1] === startColor.g &&
    data[pos + 2] === startColor.b &&
    data[pos + 3] === startColor.a);
}

export function matchColor(
  color: {r: number, g: number, b: number, a: number},
  startColor: {r: number, g: number, b: number, a: number}
  ): boolean {
  return (color.r   === startColor.r &&
    color.g === startColor.g &&
    color.b === startColor.b &&
    color.a === startColor.a);
}

export function colorPixel(data, pos, color) {
  data[pos] = color.r || 0;
  data[pos + 1] = color.g || 0;
  data[pos + 2] = color.b || 0;
  data[pos + 3] = color.hasOwnProperty('a') ? color.a : 255;
}

export function pen(x: number, y: number, ctx: CanvasRenderingContext2D, size: number, color: string): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}
export function draw(
  x1: number, y1: number, x2: number, y2: number
): number[][] {
  let dx1;
  let dy1;
  let px;
  let py;
  let xe;
  let ye;
  let i;
  let x;
  let y;
  let dx;
  let dy;

  const corArr = [];

  dx = x2 - x1;
  dy = y2 - y1;

  dx1 = Math.abs(dx);
  dy1 = Math.abs(dy);

  px = 2 * dy1 - dx1;
  py = 2 * dx1 - dy1;

  if (dy1 <= dx1) {

    if (dx >= 0) {
      x = x1; y = y1; xe = x2;
    } else {
      x = x2; y = y2; xe = x1;
    }

    corArr.push([x, y]);

    for (i = 0; x < xe; i++) {
      x = x + 1;

      if (px < 0) {
        px = px + 2 * dy1;
      } else {
        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
          y = y + 1;
        } else {
          y = y - 1;
        }
        px = px + 2 * (dy1 - dx1);
      }

      corArr.push([x, y]);
    }

  } else {

    if (dy >= 0) {
      x = x1; y = y1; ye = y2;
    } else {
      x = x2; y = y2; ye = y1;
    }

    corArr.push([x, y]);

    for (i = 0; y < ye; i++) {
      y = y + 1;

      if (py <= 0) {
        py = py + 2 * dx1;
      } else {
        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
          x = x + 1;
        } else {
          x = x - 1;
        }
        py = py + 2 * (dx1 - dy1);
      }

      corArr.push([x, y]);
    }
  }
  return corArr;
}
