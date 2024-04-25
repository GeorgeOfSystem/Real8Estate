export const filterItems = (query: any, items: any) => {
  return items.filter(
    (item: any) =>
      item.baths >= query.bathrooms &&
      item.beds >= query.bedrooms &&
      item.price <= query.price
  );
};
