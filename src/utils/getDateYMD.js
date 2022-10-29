export default function getDateYMD(date) {
  const splitDate = date.split("-");

  const year = splitDate[2];
  const month = splitDate[1];
  const day = splitDate[0];

  return `${year}-${month}-${day}`;
}
