import React, { createContext, useState } from "react";
import { v4 } from 'uuid';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const profileExample = {
    id: v4(),
    fullName: "John Dio",
    email: "email@email.com",
    profession: "Software Engineer",
    hobbies: ["sport", "book", "bike"],
    location: "Washington",
    avatar: 'data:image/png;base64,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',
  }
  const [user, setUser] = useState(profileExample);

  const getUserInfo = () => {
    return { ...user }
  }

  const ctx = {
    getUserInfo
  }
  return <UserContext.Provider value={ ctx }>{ children }</UserContext.Provider>;
};