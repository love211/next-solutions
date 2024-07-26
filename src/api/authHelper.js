import apiService from "./axios";
import { jwtDecode } from "jwt-decode";
export const getToken = () => {
  return localStorage.getItem("token");
};
export const removeToken = () => {
  window.localStorage.removeItem("token");
};
export const setToken = (val) => {
  window.localStorage.setItem("token", val);
};

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  window.clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  console.log("timeLeft", timeLeft);
  expiredTimer = window.setTimeout(() => {
    console.log("expired");
    // You can do what ever you want here, like show a notification
  }, timeLeft);
};

export const setSession = (accessToken) => {
  if (accessToken) {
    setToken(accessToken);
    apiService.defaults.headers.common.Authorization = `${accessToken}`;
    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken);
    handleTokenExpired(exp);
  } else {
    removeToken();
    delete apiService.defaults.headers.common.Authorization;
  }
};
