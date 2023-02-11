export const RGBToHex = (rgbStr: string) => {
  const sep = rgbStr.indexOf(',') > -1 ? ',' : ' ';
  const rgb = rgbStr.substr(4).split(')')[0].split(sep);

  const persentToRgbArr = rgb.map((color) => {
    if (color.indexOf('%') > -1) {
      return Math.round(
        (Number(color.substr(0, color.length - 1)) / 100) * 255,
      );
    }

    return color;
  });

  let r = (+persentToRgbArr[0]).toString(16);
  let g = (+persentToRgbArr[1]).toString(16);
  let b = (+persentToRgbArr[2]).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
};
