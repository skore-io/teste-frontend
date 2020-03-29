const addsZeroToTheLeft = value => (value < 10 ? "0" + value : value);

const timestampToDate = timestamp => {
  const date = new Date(timestamp);
  const d = date.getDate();
  const m = addsZeroToTheLeft(date.getMonth() + 1);
  const y = addsZeroToTheLeft(date.getFullYear());
  return `${d}/${m}/${y}`;
};

export default {
  timestampToDate
};
