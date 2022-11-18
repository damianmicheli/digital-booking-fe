import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {

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


export { FilterContextProvider };
export default FilterContext;