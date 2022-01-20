import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from '../components/Layout';
const theme = {
  styles: {
    global: {
      body: {
        background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
      },
    },
  },
};
const customTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
