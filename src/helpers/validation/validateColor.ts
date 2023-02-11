export const validateColor = (color: string) => {
  const regex =
    /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*\d+%?°?\s*,){2}(\s*\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1|0)?\)$/i;

  return color && regex.test(color);
};
