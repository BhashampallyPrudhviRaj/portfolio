import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => {
  const isDark = mode === 'dark';
  
  return {
    palette: {
      mode,
      primary: {
        main: '#3b82f6', // Modern blue like Tailwind
        light: '#60a5fa',
        dark: '#2563eb',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#14b8a6', // Teal
        light: '#2dd4bf',
        dark: '#0f766e',
        contrastText: '#ffffff',
      },
      background: {
        default: isDark ? '#0f172a' : '#f8fafc', // Slate 900 vs Slate 50
        paper: isDark ? '#1e293b' : '#ffffff',   // Slate 800 vs White
      },
      text: {
        primary: isDark ? '#f1f5f9' : '#1e293b',
        secondary: isDark ? '#94a3b8' : '#64748b',
      },
      divider: isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(0, 0, 0, 0.08)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
      },
      h4: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 500,
      },
      button: {
        textTransform: 'none' as const,
        fontWeight: 600,
      },
      body1: {
        lineHeight: 1.7,
        fontSize: '1.05rem',
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },
      overline: {
        letterSpacing: '0.1em',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '10px 24px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transform: 'translateY(-1px)',
            },
            transition: 'all 0.2s ease-in-out',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'none',
            borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
          },
        },
      },
    },
  };
};

export const createAppTheme = (mode: PaletteMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));
