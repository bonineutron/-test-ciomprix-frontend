import { createContext, useContext, useState, useCallback } from 'react';
import { clearTokenData } from '../services/local-storage.services';
import { IToken } from '../interfaces/response-signup-signin.interface';

export type AppContextType = {
   loggedIn: boolean;
   tokenDetails: IToken;
   storeTokenDetails: (responseSigninSignup?: IToken) => void;
   clearTokenDetails: () => void;
   startTokenDetails: () => void;
};

interface AppWrapperProps {
   children: JSX.Element;
}

const initialState: AppContextType = {
   loggedIn: false,
   tokenDetails: {
      token: '',
      message: ''
   },
   storeTokenDetails: () => {},
   clearTokenDetails: () => {},
   startTokenDetails: () => {}
};

const TokenContext = createContext<AppContextType>(initialState);

export default function AppWrapper(props: AppWrapperProps) {
   const [loggedIn, setLoggedIn] = useState<boolean>(false);
   const [tokenDetails, setTokenDetails] = useState<IToken>(initialState.tokenDetails);
   const storeTokenDetails = useCallback((details: IToken) => {
      if (details) {
         setTokenDetails(details);
         setLoggedIn(true);
      } else {
         setLoggedIn(false);
      }
   }, []);
   const clearTokenDetails = useCallback(() => {
      clearTokenData();
      setTokenDetails(undefined);
      setLoggedIn(false);
   }, []);
   const startTokenDetails = useCallback(() => {
      setTokenDetails(undefined);
      setLoggedIn(false);
   }, []);
   return (
      <TokenContext.Provider
         value={{
            loggedIn,
            tokenDetails,
            storeTokenDetails,
            clearTokenDetails,
            startTokenDetails
         }}>
         {props.children}
      </TokenContext.Provider>
   );
}

export function useTokenContext() {
   return useContext(TokenContext);
}
