import { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script';

import { client } from '../service/apollo';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload" id="googleAnalytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>    
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
