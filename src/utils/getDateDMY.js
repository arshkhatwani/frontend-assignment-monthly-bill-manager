export default function getDateDMY(date) {
  const splitDate = date.split("-");

  const year = splitDate[0];
  const month = splitDate[1];
  const day = splitDate[2];

  return `${day}-${month}-${year}`;
}
