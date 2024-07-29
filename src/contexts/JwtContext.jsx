import { createContext, useEffect, useReducer } from "react";
// utils
import {
  getToken,
  isValidToken,
  setSession,
  setToken,
} from "../api/authHelper";
import apiService from "../api/axios";
import { apiEndpoints } from "../api/apiEndPoint";

// ----------------------------------------------------------------------

const Types = {
  Initial: "INITIALIZE",
  Login: "LOGIN",
  Logout: "LOGOUT",
  Register: "REGISTER",
};
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = getToken();

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await apiService.get(apiEndpoints.user);
          const { data } = response.data;

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: data,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await apiService.post(apiEndpoints.login, {
      data: {
        email: email,
        password: password,
      },
    });
    const { data, meta } = response.data;
    setSession(meta.token);
    dispatch({
      type: Types.Login,
      payload: {
        user: { ...data },
      },
    });
  };

  const loginGoggle = async (email, password) => {
    const response = await apiService.get(apiEndpoints.gAuth);
    const { data, meta } = response.data;
    setSession(meta.token);
    dispatch({
      type: Types.Login,
      payload: {
        user: { ...data },
      },
    });
  };
  const register = async (name, email, password, contactNumber) => {
    const response = await apiService.post(apiEndpoints.signUp, {
      data: {
        name: name,
        email: email,
        password: password,
        role: "test",
        contact_number: contactNumber,
      },
    });

    const { data, meta } = response.data;
    delete "createdAt" in data;
    setToken(meta.token);
    dispatch({
      type: Types.Register,
      payload: {
        user: data,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  const resetPassword = (email) => console.log(email);

  const updateProfile = () => {};
  console.log("response", state.user);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        loginGoggle,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
