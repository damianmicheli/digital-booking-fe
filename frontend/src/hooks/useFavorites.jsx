import { useEffect, useState } from "react";

const useFavorites =() =>{
  const [favorites, setFavorites] = useState(() => {
    const ls = localStorage.getItem("favorites");
    if (ls) return JSON.parse(ls);
    else return [];
  });

  const toggleItemInLocalStorage = (id) => () => {
    const isFavorite = favorites.includes(id);
    if (isFavorite) setFavorites((prev) => prev.filter((b) => b !== id));
    else setFavorites((prev) => [...prev, id]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return [favorites, toggleItemInLocalStorage];
}

export default useFavorites;


