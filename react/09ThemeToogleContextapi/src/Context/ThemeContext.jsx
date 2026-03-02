import React, { createContext, useState } from 'react';

// 1. Create the Context with a default value (optional, but good for TypeScript)
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

// 2. Create the Provider component
export const ThemeProvider = ThemeContext.Provider
// 4. Create a custom hook to easily consume the context
export const useTheme = () => React.useContext(ThemeContext);