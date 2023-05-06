import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [search,setSearch] = useState('')
  console.log(search);
  return (
    <ModeContext.Provider value={[mode, setMode,search,setSearch]}>
      {children}
    </ModeContext.Provider>
  );
};
