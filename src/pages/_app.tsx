import type { AppProps } from 'next/app'
import Head from 'next/head'

import { getCssText } from 'styles/config'
import { globalStyles } from 'styles/global'

import { useApollo } from 'graphql/apollo-config'
import { ApolloProvider } from '@apollo/client'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Boilerplate of Next JS</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Um simples esqueleto para iniciar um projeto Next JS"
        />
        <meta name="theme-color" content="#06092b" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
