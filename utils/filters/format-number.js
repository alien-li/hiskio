import numeral from 'numeral';

const formatNumber = (value = 0, type = '0,0') => {
  let number = value;

  if (!value) {
    return value;
  }

  number = numeral(value).format(type);

  if (type.includes('a')) {
    number = number.toUpperCase();
  }

  return number;
};

export default formatNumber;
