import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Trans } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./contexts/Auth0Context.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { auth0Config } from "./config.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/JwtContext.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Trans>
        <GoogleOAuthProvider clientId={auth0Config.clientId}>
          <AuthProvider>
            <App />
            <ToastContainer autoClose={3000} />
          </AuthProvider>
        </GoogleOAuthProvider>
      </Trans>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
