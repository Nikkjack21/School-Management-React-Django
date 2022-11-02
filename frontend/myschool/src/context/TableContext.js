import { useState } from "react";
import { createContext } from "react";

const TableContext = createContext(null);
export default TableContext;

export const TableProvider = ({ children }) => {

const [classNumID, setClassNum] = useState("")

const [subName, setSubName] = useState('')

console.log('TABLECONTEXT', classNumID);


  const newData = {
    classNumID:classNumID,
    subName:subName,
    setClassNum:setClassNum,
    setSubName:setSubName,

  };

  return (
    <TableContext.Provider value={newData}>{children}</TableContext.Provider>
  );
};
