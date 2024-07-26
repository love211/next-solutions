import React, { createContext, useEffect, useReducer } from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from '../config';

let auth0Client = null;

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const Types = {
  INIT: 'INITIALIZE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

const reducer = (state, action) => {
  switch (action.type) {
    case Types.INIT:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user
      };
    case Types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case Types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        auth0Client = new Auth0Client({
          client_id: auth0Config.clientId,
          domain: auth0Config.domain,
          redirect_uri: window.location.origin
        });

        await auth0Client.checkSession();

        const isAuthenticated = await auth0Client.isAuthenticated();

        if (isAuthenticated) {
          const user = await auth0Client.getUser();
          dispatch({
            type: Types.INIT,
            payload: { isAuthenticated, user: user || null }
          });
        } else {
          dispatch({
            type: Types.INIT,
            payload: { isAuthenticated: false, user: null }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.INIT,
          payload: { isAuthenticated: false, user: null }
        });
      }
    };

    initialize();
  }, []);

  const login = async () => {
    await auth0Client.loginWithPopup();
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
      const user = await auth0Client.getUser();
      dispatch({ type: Types.LOGIN, payload: { user: user || null } });
    }
  };

  const logout = () => {
    auth0Client.logout();
    dispatch({ type: Types.LOGOUT });
  };

  const resetPassword = (email) => {
    // Implement password reset logic if necessary
  };

  const updateProfile = () => {
    // Implement profile update logic if necessary
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'auth0',
        user: {
          id: state.user?.sub,
          photoURL: state.user?.picture,
          email: state.user?.email,
          displayName: state.user?.name || '',
          role: 'admin'
        },
        login,
        logout,
        resetPassword,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
