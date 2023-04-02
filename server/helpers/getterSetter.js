export function getCurrency(integer, decimals = 2) {
  return (integer / 10 ** decimals).toFixed(decimals);
}
export function setCurrency(float, decimals = 2) {
  return float * 10 ** decimals;
}
