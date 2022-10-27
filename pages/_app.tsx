import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../theme/theme'
import createEmotionCache from '../theme/createEmotionCache'
import Layout from '../components/layouts/layout'
import { AppContextProvider } from '../context/AppContext'

import { ToastContainer } from "react-toastify"
import toast from "../components/Toast"
import "react-toastify/dist/ReactToastify.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

declare global {
  interface Window { martian: any; }
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={8000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable={false}
              closeOnClick
              pauseOnHover
            />
          </Layout>
        </AppContextProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
