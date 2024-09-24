export const arrayToOptions = <T extends string | number>(
  optionsList: T[]
): { label: T; value: T }[] => {
  if (!Array.isArray(optionsList)) {
    return [];
  }

  return optionsList.map((item) => {
    return {
      label: item,
      value: item,
    };
  });
};
