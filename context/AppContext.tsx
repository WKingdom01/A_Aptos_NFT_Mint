import React, { useState, ReactNode, useContext } from 'react';

interface AppContextInterface {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const AppContext = React.createContext<AppContextInterface>({
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {},
});

type MyAppContextProps = {
  children: NonNullable<ReactNode>;
};

export const AppContextProvider: React.FC<MyAppContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);