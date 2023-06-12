import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import "styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
