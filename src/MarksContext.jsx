import React, { createContext, useState } from 'react';

export const MarksContext = createContext();

export default function MarksProvider({ children }) {
  const [marks, SetMarks] = useState([]);

  function addMarks(student) {
    SetMarks([...marks, student]);
  }

  return (
    <MarksContext.Provider value={{ marks, addMarks }}>
      {children}
    </MarksContext.Provider>
  );
}