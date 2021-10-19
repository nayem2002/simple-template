import { createContext, useContext, useRef } from 'react';

export const scrollContext = createContext({
  name: 'null',
});

const ScrollContextProvider = ({ children }) => {
  const service = useRef(null);

  return <scrollContext.Provider value={{}}></scrollContext.Provider>;
};

export default ScrollContextProvider;
