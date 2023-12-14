export const strCapitalizeAllFirstChar = str => {
  return str
    .split(' ')
    .filter(w => w)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

export const strCapitalizeSentence = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const strSplitCamelCase = str => {
  const val = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return val.toLowerCase();
};
