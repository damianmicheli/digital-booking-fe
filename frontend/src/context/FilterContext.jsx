import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState({
    title: null
  });
  
  const [valuesForm, setValuesForm] = useState({
    city: null,
    date: {
      startDate: null,
      endDate: null
    }
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
      setValuesForm((prevState) => {
        return {
          ...prevState,
          city: null,
        };
      });
    },
    handleClearDate: () => {
      setValuesForm((prevState) => {
        return {
          ...prevState,
          date: {
            startDate: null,
            endDate: null
          }
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