import React, { createContext, useState } from "react";
import { v4 } from 'uuid';

const profileExample = {
  id: v4(),
  fullName: "John Dio",
  email: "email@email.com",
  profession: "Profession",
  hobbies: ["sport", "book", "bike"],
  location: "Washington",
}

export const UserContext = createContext(profileExample);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(profileExample);

  const getUserInfo = () => {
    return { user }
  }

  const ctx = {
    getUserInfo
  }
  return <UserContext.Provider value={ ctx }>{ children }</UserContext.Provider>;
};
