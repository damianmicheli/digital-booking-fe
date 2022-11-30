import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("¿A dónde vamos?");

  const [selectedDate, setSelectedDate] = useState("Check in - Check out");

  const [reservationDate, setReservationDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [selectedCategory, setSelectedCategory] = useState({
    title: null,
  });

  const [valuesForm, setValuesForm] = useState({
    city: null,
    date: {
      startDate: null,
      endDate: null,
    },
  });

  const filterHandlers = {
    handleClearCategory: () => {
      setSelectedCategory({
        title: null,
        id: null,
      });
    },
    handleClearCity: () => {
      setValuesForm((prevState) => {
        return {
          ...prevState,
          city: null,
          id: null,
        };
      });
      setSelectedCity("¿A dónde vamos?");
    },
    handleClearDate: () => {
      setValuesForm((prevState) => {
        return {
          ...prevState,
          date: {
            startDate: null,
            endDate: null,
          },
        };
      });
      setSelectedDate("Check in - Check out");
      setReservationDate((prevState) => {
        return {
          ...prevState,
          startDate: null,
          endDate: null,
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
        filterHandlers,
        selectedCity,
        setSelectedCity,
        selectedDate,
        setSelectedDate,
        reservationDate,
        setReservationDate,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider };
export default FilterContext;
