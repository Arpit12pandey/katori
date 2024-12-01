import {createContext, useState} from "react";



export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [isFocusednav, setIsFocusednav] = useState(false);
    const [isFocusedlogreg, setIsFocusedlogreg] = useState(false);
    const [isFocusedfoot, setIsFocusedfoot] = useState(false);

  return (
    <UserContext.Provider value={{isFocusednav, setIsFocusednav,isFocusedlogreg, setIsFocusedlogreg,isFocusedfoot, setIsFocusedfoot}}>
      {children}
    </UserContext.Provider>
  );
}