import { FC, ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Make sure to have the correct import for typescript
import api from "../api/api";
import { REFRESH_TOKEN, ACCESS_TOKEN, AUTH_USERNAME } from "../api/constants";

interface ProtectedRouteProps {
  children: ReactNode;
}
// ProtectedRoute wraps all our authorized pages
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<null | boolean>(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  });
  const refreshToken = async (): Promise<void> => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      // If Access token expires, try to generate new using Refresh Token
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });

      // If success, Replace Access Token in local storage. Else, Logout user
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        localStorage.setItem(AUTH_USERNAME, "");
        setIsAuthorized(false);
      }
    } catch (error) {
      localStorage.setItem(AUTH_USERNAME, "");
      setIsAuthorized(false);
    }
  };

  const auth = async (): Promise<void> => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    // Check if the Access token is expired or valid, Refresh if expired
    const decoded = jwtDecode<JwtPayload>(token);
    const tokenExpiration: number = decoded.exp as number;
    const now: number = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
