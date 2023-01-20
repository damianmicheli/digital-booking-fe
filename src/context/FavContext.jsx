import { createContext, useState,  useCallback } from "react";

const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const ls = localStorage.getItem("favorites");
    if (ls) return JSON.parse(ls);
    else return [];
  });

 console.log({favorites});

  const toggleItemInLocalStorage = useCallback(    
    (id, isFavorite) => {
      console.log({isFavorite, id});
      if (isFavorite) {
        setFavorites((prev) => prev.filter((b) => b !== id));
      } else {
       console.log("entra");
        const newFavorites = [...favorites, id];
        setFavorites(newFavorites);
      }
    },
    [favorites]
  );

  const data = { favorites, toggleItemInLocalStorage };

  return <FavContext.Provider value={data}>{children}</FavContext.Provider>;
};

export { FavProvider };
export default FavContext;
