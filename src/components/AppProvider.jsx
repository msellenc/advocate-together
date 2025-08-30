import { useState } from "react";
import AppContext from "../store";

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  return (
    <AppContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      activeService,
      setActiveService
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;