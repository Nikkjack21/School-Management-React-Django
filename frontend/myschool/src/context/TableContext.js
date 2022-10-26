import { useState } from "react";
import { createContext } from "react";

const TableContext = createContext(null);
export default TableContext;

export const TableProvider = ({ children }) => {

const [classNumID, setClassNum] = useState("")




  const newData = {
    classNumID:classNumID,
    setClassNum:setClassNum,

  };

  return (
    <TableContext.Provider value={newData}>{children}</TableContext.Provider>
  );
};
