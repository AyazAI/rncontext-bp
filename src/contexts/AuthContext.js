import React, {useState, createContext, useContext, useReducer} from 'react';

const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        username: action.username,
      };

    default:
      return {...state};
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    username: 1,
  });

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
