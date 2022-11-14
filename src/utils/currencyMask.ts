export const currencyBRL = (value: number) => {
  if (!value) {
    value = 0;
  }

  if (typeof value === "string") {
    value = Number(value);
  }

  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
};
