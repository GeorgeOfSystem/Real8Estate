export const filterItems = (query: any, items: any) => {
  return items.filter(
    (item: any) =>
      item.baths >= query.bathrooms &&
      item.beds >= query.bedrooms &&
      (query.price == 100 ? true : item.price <= query.price * 100)
  );
};

export const emailValidation = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
