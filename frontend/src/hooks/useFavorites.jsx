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


/* // get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index === -1) {
    favorites.push(id);
    item.className = 'fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage 

  return 
}

export default FavoriteList; */