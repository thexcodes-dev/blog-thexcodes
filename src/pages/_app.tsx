import { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'

import { client } from '../service/apollo';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
