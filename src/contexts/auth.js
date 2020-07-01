import React, {createContext, useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

export const AuthContext = createContext({});

import api from '../services/api';

function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await AsyncStorage.getItem('Auth_user');

      if (userStorage) {
        setUser(JSON.parse(userStorage));
      }
    }
    loadStorage();
  }, []);

  async function signIn(values) {
    const response = await api.put('users/token', values);
    setUser(response.data);
    storageUser(response.data);
  }

  async function storageUser(data) {
    AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;