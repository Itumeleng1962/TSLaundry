import { createContext, useContext, useState, useCallback } from "react";
import { CURRENT_USER } from "@/data/dashboard";

const AuthContext = createContext(null);

// Mock authentication — no real backend, purely front-end demo state.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((email) => {
    const role = email?.toLowerCase().includes("admin") ? "admin" : "customer";
    setUser({ ...CURRENT_USER, email: email || CURRENT_USER.email, role });
    return { role };
  }, []);

  const register = useCallback((data) => {
    setUser({ ...CURRENT_USER, name: data.name, email: data.email, role: "customer" });
    return { role: "customer" };
  }, []);

  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
