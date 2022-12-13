import { createContext, useEffect, useState } from "react";
import Attribute from "../components/administration/content/Attribute";
import { faSquarePlus, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const AttributeContext = createContext();

const AttributeProvider = ({ children }) => {
  const [attributeCounter, setAttributesCounter] = useState([
    { id: "", name: "" },
  ]);
  const [attributeInputs, setAttributeInputs] = useState([]);
  const [attributesList, setAttributesList] = useState([]);
  const [attributesLoaded, setAttributesLoaded] = useState([]);

  const addAttribute = ({ id, name }) => {
    /*  const newIndex = Number(attributeCounter[attributeCounter.length - 1] + 1);
    console.log({ newIndex }); */
    attributeCounter[0].id
      ? setAttributesCounter([{ id, name }])
      : setAttributesCounter((prev) => [...prev, { id, name }]);
    console.log("Se agregó un input de atributo");
    console.log({ attributeCounter });
  };

  const deleteAttribute = (number) => {
    setAttributesCounter(
      attributeCounter.filter((attribute) => attribute.id !== number)
    );
    console.log({ number, attributeCounter });
    const newAttribute = [];
    console.log({ attributeInputs });
    console.log({ attributesList });
    attributeInputs.forEach((input) => {
      console.log({ input });
      input !== number && newAttribute.push(input);
    });
    console.log({ newAttribute });
    setAttributesList(attributesList.filter((id) => id !== number));
    setAttributeInputs(newAttribute);
  };

 // console.log({ attributesList });
//  console.log({ attributeCounter });
  const handleAttribute = (number, id, iconInput, setIconInput, name) => {
    /*     console.log({ boolean, number, iconInput }); */
    if (iconInput === faSquarePlus) {
      addAttribute({ id, name });
      //setIconInput(faSquareXmark);
      setIconInput(faSquareCheck);
    } else {
      //deleteAttribute(id);
      
    }
  };

  useEffect(() => {
    setAttributesLoaded(attributesList);
  }, [handleAttribute /* , deleteAttribute */]);

  useEffect(() => {
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
    setAttributesList,
    addAttribute,
    deleteAttribute,
    handleAttribute,
  };

  return (
    <AttributeContext.Provider value={data}>
      {children}
    </AttributeContext.Provider>
  );
};

export { AttributeProvider };
export default AttributeContext;
