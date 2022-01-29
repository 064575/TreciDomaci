
const crveniBrojevi = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

export const getBoja = broj => {
  if (broj === 0) {
    return 'green';
  }
  return crveniBrojevi.includes(broj) ? 'red' : 'black';
}