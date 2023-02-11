export const HSLToRGB = (hslStr: string) => {
  const sep = hslStr.indexOf(',') > -1 ? ',' : ' ';
  const hsl = hslStr.substr(4).split(')')[0].split(sep);

  const h = hsl[0];
  let hNum = 0;
  let s = +hsl[1].substr(0, hsl[1].length - 1) / 100;
  let l = +hsl[2].substr(0, hsl[2].length - 1) / 100;

  if (h.indexOf('deg') > -1) hNum = +h.substr(0, h.length - 3);
  else if (h.indexOf('rad') > -1)
    hNum = Math.round(+h.substr(0, h.length - 3) * (180 / Math.PI));
  else if (h.indexOf('turn') > -1)
    hNum = Math.round(+h.substr(0, h.length - 4) * 360);
  // Keep hue fraction of 360 if ending up over
  if (+h >= 360) hNum %= 360;

  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hNum / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (hNum >= 0 && hNum < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (hNum >= 60 && hNum < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (hNum >= 120 && hNum < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (hNum >= 180 && hNum < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (hNum >= 240 && hNum < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (hNum >= 300 && hNum < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
};
