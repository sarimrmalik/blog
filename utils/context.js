import { createContext, useState, useContext } from "react";

// Define context instance
const Context = createContext();

// Define provider instance
const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  // Objects exposed by the provider
  const exposed = { darkMode, setDarkMode };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useGlobalContext = () => useContext(Context);

export default Provider;
