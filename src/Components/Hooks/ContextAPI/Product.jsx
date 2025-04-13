import { children, createContext } from "react";

export const MyProductContext = createContext();

export const MyProductProvider = ({children}) => {
  const MobileInfo = {
    mobileName: "Iphone 16",
    price: "11,0000",
    salePrice: "80,000",
  };
  return (
    <MyProductContext.Provider value={{ MobileInfo }}>
      {children}
    </MyProductContext.Provider>
  );
};
