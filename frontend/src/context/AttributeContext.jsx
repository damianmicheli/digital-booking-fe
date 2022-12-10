import { createContext, useEffect, useState } from "react";
import Attribute from "../components/administration/content/Attribute";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const AttributeContext = createContext();

const AttributeProvider = ({ children }) => {
  const [attributeCounter, setAttributesCounter] = useState([1]);
  const [attributeInputs, setAttributeInputs] = useState([]);
  const [attributesList, setAttributesList] = useState([]);
  const [attributesLoaded, setAttributesLoaded] = useState([]);
 
    const addAttribute = () => {
    const newIndex = Number(attributeCounter[attributeCounter.length - 1] + 1);
    console.log({ newIndex });
    setAttributesCounter((prev) => [...prev, newIndex]);
    console.log("Se agregó un input de atributo");
  };

  const deleteAttribute = (number) => {
    console.log({ number });
    const newAttribute = [];

    attributeInputs.forEach((input) => {
      console.log({ input });
      input !== number && newAttribute.push(input);
    });
    console.log({ newAttribute });
    setAttributeInputs(newAttribute);
    console.log({ attributeCounter });
    console.log("Se eliminó un input");
  };

 ;

  const handleAttribute = (boolean, number, id, iconInput, setIconInput) => {
    console.log({ boolean, number });
    setAttributesList([...attributesList, {id}]);    
    iconInput === faSquarePlus && addAttribute();
    setIconInput(faSquareXmark);         
  };

  useEffect(()=>{
    setAttributesLoaded(attributesList)
  },[handleAttribute])

  console.log({attributesLoaded});

  useEffect(() => {
    console.log({ attributeCounter });
    for (let i = 1; i < attributeCounter; i++) {
      setAttributeInputs(
        attributeInputs.concat(
          <Attribute
            key={Math.random() + i}
            handleAttribute={handleAttribute}
          />
        )
      );
    }
  }, [attributeCounter]);

  const data = {
    attributeCounter,
    attributeInputs,
    attributesLoaded,
    attributesList,
    addAttribute,
    deleteAttribute,
    handleAttribute
  };

  return (
    <AttributeContext.Provider value={data}>
      {children}
    </AttributeContext.Provider>
  );
};

export { AttributeProvider };
export default AttributeContext;
