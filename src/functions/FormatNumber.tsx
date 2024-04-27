const FormatNumber = (numberToFormat: number) => {
  return numberToFormat.toFixed(2).toString().replace('.', ',');
};

export default FormatNumber;
