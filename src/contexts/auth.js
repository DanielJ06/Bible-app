import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext({});

import api from '../services/api';

function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   async function loadStorage() {
  //     const userStorage = await AsyncStorage.getItem('Auth_user');

  //     if (userStorage) {
  //       setUser(JSON.parse(userStorage));
  //     }
  //   }
  //   loadStorage();
  // }, []);

  async function signIn(values) {
    try {
      const response = await api.post('usuarios/auth', values);
      setUser(response.data);
    } catch (err) {
      setLoading(false);
    }
  }

  // async function signOut() {
  //   await AsyncStorage.clear().then(() => {
  //     setUser(null);
  //     setSocket(null);
  //     setLoading(false);
  //   });
  // }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;