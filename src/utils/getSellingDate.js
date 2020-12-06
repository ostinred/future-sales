export const getSellingDate = (product) => {
  return product.publishedAt;

  const date = new Date(product.publishedAt);
}