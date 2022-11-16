import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const [valuesForm, setValuesForm] = useState({
    city: null
  });

  const filterHandlers = {
    handleClearFilters: () => {
      setSelectedCategory(null);
      setValuesForm({
        city: null
      });
    },

    handleDeleteCategory: () => {
      setSelectedCategory(null);
    },

    handleDeleteCity: () => {
      setValuesForm((prevState) => {
        return {
          ...prevState,
          city: null,
        };
      });
    },
  };

  return (
    <FilterContext.Provider
      value={{
        valuesForm,
        setValuesForm,
        selectedCategory,
        setSelectedCategory,
        filterHandlers
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
