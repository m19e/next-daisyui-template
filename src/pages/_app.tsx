import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>【こころの色、恋のうた】櫻木 真乃</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
