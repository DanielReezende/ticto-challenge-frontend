export const dateFormatter = (dateTime: string) => {
  const date = new Date(dateTime);
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(date);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${formattedDate} às ${hours}h${minutes}`;
};

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
