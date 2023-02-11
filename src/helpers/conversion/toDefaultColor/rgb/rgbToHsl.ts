export const RGBToHSL = (rgbStr: string) => {
  const sep = rgbStr.indexOf(',') > -1 ? ',' : ' ';
  const rgb = rgbStr.substr(4).split(')')[0].split(sep);

  const persentRgb = rgb.map((color) => {
    if (color.indexOf('%') > -1) {
      return Math.round((+color.substr(0, color.length - 1) / 100) * 255);
    }

    return +color;
  });

  // Make r, g, and b fractions of 1
  let r = persentRgb[0] / 255;
  let g = persentRgb[1] / 255;
  let b = persentRgb[2] / 255;

  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
};
