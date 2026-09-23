import { createContext, useContext, useMemo } from "react"
import { generateTheme } from "./generateTheme"

const ThemeContext = createContext<ReturnType<typeof generateTheme> | null>(null)

export function KraftNowProvider({
  baseColor,
  children
}: {
  baseColor: string,
  children: React.ReactNode
}) {
  const theme = useMemo(() => generateTheme(baseColor), [baseColor])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    const theme = useContext(ThemeContext)
    if (!theme) throw new Error('useTheme must be used within KraftNowProvider')
    return theme
}