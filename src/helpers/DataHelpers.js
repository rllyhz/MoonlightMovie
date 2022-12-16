export const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  let monthName;

  if (month == '01') {
    monthName = 'Jan';
  } else if (month == '02') {
    monthName = 'Feb';
  } else if (month == '03') {
    monthName = 'Mar';
  } else if (month == '04') {
    monthName = 'Apr';
  } else if (month == '05') {
    monthName = 'Mei';
  } else if (month == '06') {
    monthName = 'Jun';
  } else if (month == '07') {
    monthName = 'Jul';
  } else if (month == '08') {
    monthName = 'Aug';
  } else if (month == '09') {
    monthName = 'Sep';
  } else if (month == '10') {
    monthName = 'Oct';
  } else if (month == '11') {
    monthName = 'Nov';
  } else {
    monthName = 'Dec';
  }

  return `${day} ${monthName} ${year}`;
};

export const splitDateString = (dateString, delimiter = '-') => dateString.split(delimiter)