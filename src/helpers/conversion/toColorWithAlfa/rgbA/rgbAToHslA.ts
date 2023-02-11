export const RGBAToHSLA = (rgbaStr: string) => {
  const sep = rgbaStr.indexOf(',') > -1 ? ',' : ' ';
  const rgbaArr = rgbaStr.substr(5).split(')')[0].split(sep);

  // Strip the slash if using space-separated syntax
  if (rgbaArr.indexOf('/') > -1) rgbaArr.splice(3, 1);

  const persentToRgbaArr = rgbaArr.map((rgb, i) => {
    if (rgb.indexOf('%') > -1) {
      const p = Number(rgb.substr(0, rgb.length - 1)) / 100;

      if (i < 3) {
        return Math.round(p * 255);
      }

      return p;
    }

    return +rgb;
  });

  // Make r, g, and b fractions of 1
  const r = persentToRgbaArr[0] / 255;
  const g = persentToRgbaArr[1] / 255;
  const b = persentToRgbaArr[2] / 255;
  const a = persentToRgbaArr[3];

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  // Rest of RGB-to-HSL logic
  // Calculate hue
  // No difference
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

  return [h, s, l, a];
};
