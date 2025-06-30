// src/utils/auth.js

const USER_KEY = 'tool_tracking_user';

export const loginUser = (userData) => {
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

export const logoutUser = () => {
  localStorage.removeItem(USER_KEY);
};

export const getLoggedInUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const getUserRole = () => {
  const user = getLoggedInUser();
  return user ? user.role : null;
};

export const isAuthenticated = () => {
  return getLoggedInUser() !== null;
};
