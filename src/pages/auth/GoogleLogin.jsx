import { apiEndpoints } from "@/api/apiEndPoint";
import apiService from "@/api/axios";
import useAuth from "@/auth/useAuth";
import { auth0Config } from "@/config";
import {
  GoogleLogin as Glogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
  const { handleGoogleLogin } = useAuth();
  return (
    <GoogleOAuthProvider clientId={auth0Config.clientId}>
      <Glogin
        onSuccess={(credentialResponse) => {
          const token = credentialResponse.credential;
          const decodedUser = jwtDecode(token);
          handleGoogleLogin(token, decodedUser);
        }}
        onError={(err) => console.log("Google-err", err)}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
