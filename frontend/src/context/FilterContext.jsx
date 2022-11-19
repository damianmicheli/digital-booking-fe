import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState({
    title: null
  });
  
  const [valuesForm, setValuesForm] = useState({
    city: null
  });

  const filterHandlers = {
    handleClearFilters: () => {
      setSelectedCategory({
        title: null
      });
      setValuesForm({
        city: null
      });
    },
    handleClearCategory: () => {
      setSelectedCategory({
        title: null,
        id: null
      });
    },
    handleClearCity: () => {
      setValuesForm({
        city: null,
        id: null
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
