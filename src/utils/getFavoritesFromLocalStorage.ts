
export const getFavoritesFromLocalStorage = () => {
  const data  = localStorage.getItem("favorites");
  const productsFavorite = data ? JSON.parse(data) : [];
  const totalCount = productsFavorite.length;
  
  return {
    productsFavorite,
    totalCount,
  }
}