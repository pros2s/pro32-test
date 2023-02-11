export const RGBAToHexA = (rgbaStr: string) => {
  const sep = rgbaStr.indexOf(',') > -1 ? ',' : ' ';
  const rgba = rgbaStr.substr(5).split(')')[0].split(sep);

  // Strip the slash if using space-separated syntax
  if (rgba.indexOf('/') > -1) rgba.splice(3, 1);

  const persentToRgbaArr = rgba.map((rgb, i) => {
    if (rgb.indexOf('%') > -1) {
      const p = Number(rgb.substr(0, rgb.length - 1)) / 100;

      if (i < 3) {
        return Math.round(p * 255);
      }

      return p;
    }

    return +rgb;
  });

  let r = (+persentToRgbaArr[0]).toString(16);
  let g = (+persentToRgbaArr[1]).toString(16);
  let b = (+persentToRgbaArr[2]).toString(16);
  let a = Math.round(+persentToRgbaArr[3] * 255).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;
  if (a.length === 1) a = `0${a}`;

  return `#${r}${g}${b}${a}`;
};
