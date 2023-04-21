import type { AppProps } from 'next/app'
import '@/scss/style.scss'
import GlobalContextProvider from '@/context/context'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  return <GlobalContextProvider>
            <Component {...pageProps} />
  </GlobalContextProvider> 
}

export default appWithTranslation(App)
