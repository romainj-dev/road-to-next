import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';

type ThemeProviderProps = { children: React.ReactNode };

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
    >
      {children}
    </NextThemeProvider>
  );
};

function useTheme() {
    const { theme, setTheme, resolvedTheme } = useNextTheme();
    return {
        theme,
        setTheme,
        resolvedTheme,
    };
}

export { ThemeProvider, useTheme };
