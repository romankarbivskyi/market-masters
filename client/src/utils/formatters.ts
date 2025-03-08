export const currencyFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  maximumSignificantDigits: 3,
  notation: "compact",
  style: "currency",
  currency: "usd",
});

export const tokenFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  maximumSignificantDigits: 3,
  notation: "compact",
});

export const tokenAmountFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  notation: "compact",
});

export const numberFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});
