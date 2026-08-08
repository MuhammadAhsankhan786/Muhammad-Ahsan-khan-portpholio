import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Theme = 'dark' | '01' | '02' | '03' | '04' | '05'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null
      return saved || 'dark'
    }
    return 'dark'
  })

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('portfolio-theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }

  // Sync on mount (anti-FOUC already handled in index.html)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
