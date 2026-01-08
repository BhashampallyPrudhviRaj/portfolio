import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider, CssBaseline, PaletteMode, GlobalStyles } from '@mui/material';
import { createAppTheme } from '../theme/theme';

interface ColorModeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('dark'); // Default to dark for premium feel

  // Persist theme
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode;
    if (savedMode) setMode(savedMode);
  }, []);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    [mode],
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              transition: 'background-color 0.3s ease, color 0.3s ease',
              scrollBehavior: 'smooth',
            },
            '::-webkit-scrollbar': {
              width: '8px',
            },
            '::-webkit-scrollbar-track': {
              background: mode === 'dark' ? '#0f172a' : '#f1f5f9',
            },
            '::-webkit-scrollbar-thumb': {
              background: mode === 'dark' ? '#334155' : '#cbd5e1',
              borderRadius: '4px',
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: mode === 'dark' ? '#475569' : '#94a3b8',
            },
          }}
        />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
