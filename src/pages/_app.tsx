import { QueryClient } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CrecoApp, Colors } from '@divops-packages/blog-creco-dev';

const queryClient = new QueryClient();
const cssText = CrecoApp.GlobalCss;
export default function App({ Component, pageProps }: AppProps) {
  pageProps.style = {
    ...pageProps.style,
    backgroundColor: Colors.Dark,
  }

  return (
    <>
      <Head>
        <CrecoApp.Heads />
      </Head>
      <CrecoApp queryClient={queryClient}>
        <Component {...pageProps} />
      </CrecoApp>
      <style global jsx>{`
          ${cssText}
          p {
            font-family: Inter, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
          }
      `}</style>
    </>
  )
}
