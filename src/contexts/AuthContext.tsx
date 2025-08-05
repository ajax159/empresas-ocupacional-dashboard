import { useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import { AuthContext } from './AuthContext.context';
import type { AuthContextType } from './AuthContext.context';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (username: string) => {
    setIsLoading(true);
    // Simular delay de autenticación
    setTimeout(() => {
      const newUser: User = {
        id: '1',
        name: username,
        email: `${username.toLowerCase().replace(' ', '.')}@empresa.com`,
        role: 'user'
      };
      setUser(newUser);
      setIsLoading(false);
    }, 500);
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
