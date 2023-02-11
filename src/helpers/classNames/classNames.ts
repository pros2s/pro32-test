export type Mode = Record<string, boolean | string | undefined>;

export const classNames = (
  mainClass: string,
  otherClasses: Array<string | undefined> = [],
  mods: Mode = {},
): string =>
  [
    mainClass,
    ...otherClasses.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, key]) => Boolean(key))
      .map(([className]) => className),
  ].join(' ');
