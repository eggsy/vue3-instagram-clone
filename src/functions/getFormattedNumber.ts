export const getFormattedNumberValue = (value: number) => {
  // use intl.NumberFormat to format the number
  const formatted = Intl.NumberFormat("en-US", {
    style: "decimal",
  });

  return formatted.format(value);
};
