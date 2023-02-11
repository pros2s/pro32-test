import { Color } from 'react-color-palette';
import { hexAToHSLA } from './toColorWithAlfa/hexA/hexAToHslA';
import { hexAToRGBA } from './toColorWithAlfa/hexA/hexAToRgbA';
import { HSLAToHexA } from './toColorWithAlfa/hslA/hslAToHexA';
import { HSLAToRGBA } from './toColorWithAlfa/hslA/hslAToRgbA';
import { RGBAToHexA } from './toColorWithAlfa/rgbA/rgbAToHexA';
import { RGBAToHSLA } from './toColorWithAlfa/rgbA/rgbAToHslA';
import { hexToHSL } from './toDefaultColor/hex/hexToHsl';
import { hexToRgb } from './toDefaultColor/hex/hexToRgb';
import { HSLToHex } from './toDefaultColor/hsl/hslToHex';
import { HSLToRGB } from './toDefaultColor/hsl/hslToRgb';
import { RGBToHex } from './toDefaultColor/rgb/rgbToHex';
import { RGBToHSL } from './toDefaultColor/rgb/rgbToHsl';

export const convertToTypeColor = (color: string): Color => {
  const smallHexRegex = /^#([\da-f]{3}){1,2}$/i;
  const largeHexRegex = /^#([\da-f]{4}){1,2}$/i;

  const rgbRegex =
    /(rgb)\((\s*?\d+%?\s*,){2}(\s*?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;
  const rgbaRegex =
    /(rgba)\((\s*?\d+%?\s*,){2}(\s*?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;

  const hslRegex =
    /(hsl)\((\s*?\d+%?°?\s*,){2}(\s*?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;
  const hslaRegex =
    /(hsla)\((\s*?\d+%?\s*,){2}(\s*?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;

  let hex = '';
  let h = 0;
  let s = 0;
  let v = 0;
  let aOfHslA = 1;
  let aOfRgbA = 1;
  let b = 0;
  let g = 0;
  let r = 0;

  if (smallHexRegex.test(color)) {
    hex = color;
    [h, s, v] = hexToHSL(color);
    [r, g, b] = hexToRgb(color);
  } else if (largeHexRegex.test(color)) {
    hex = color;
    [h, s, v, aOfHslA] = hexAToHSLA(color);
    [r, g, b, aOfRgbA] = hexAToRGBA(color);
  } else if (rgbRegex.test(color)) {
    hex = RGBToHex(color);
    [h, s, v] = RGBToHSL(color);
    [r, g, b] = hexToRgb(hex);
  } else if (rgbaRegex.test(color)) {
    hex = RGBAToHexA(color);
    [h, s, v, aOfHslA] = RGBAToHSLA(color);
    [r, g, b, aOfRgbA] = hexAToRGBA(hex);
  } else if (hslRegex.test(color)) {
    hex = HSLToHex(color);
    [r, g, b] = HSLToRGB(color);
    [h, s, v] = hexToRgb(hex);
  } else if (hslaRegex.test(color)) {
    hex = HSLAToHexA(color);
    [r, g, b, aOfRgbA] = HSLAToRGBA(color);
    [h, s, v, aOfHslA] = hexAToHSLA(hex);
  }

  return {
    hex,
    hsv: { h, s, v, a: aOfHslA },
    rgb: { b, g, r, a: aOfRgbA },
  };
};
