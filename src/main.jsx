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
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Trans>
        <AuthProvider>
        <Auth0Provider
          domain="dev-w5uboe1qwccvywgi.uk.auth0.com"
          clientId="31gOItzW295Csgqvt2AL9fG4rVfdv8CZ"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
        </AuthProvider>
        {/* <GoogleOAuthProvider clientId={auth0Config.clientId}> */}
        <ToastContainer autoClose={3000} />
        {/* </AuthProvider> */}
        {/* </GoogleOAuthProvider> */}
      </Trans>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
