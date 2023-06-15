const priceFormatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export default function format(num : number) {
  return priceFormatter.format(num);
}
