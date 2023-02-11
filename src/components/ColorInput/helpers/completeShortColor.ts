export const completeShortColor = (inputValue: string) => {
  const stringInputValue = inputValue.slice(1, -1);
  const isElemsEqual = stringInputValue
    .split('')
    .every((val) => stringInputValue[0] === val);

  let fullColor = inputValue;

  if (isElemsEqual) {
    if (stringInputValue.length === 2) {
      for (let i = 0; i < 3; i++) {
        fullColor += stringInputValue[0];
      }
    } else if (stringInputValue.length === 3) {
      for (let i = 0; i < 4; i++) {
        fullColor += stringInputValue[0];
      }
    }
  }

  return fullColor;
};
