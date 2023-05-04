import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  body {
    font-family: 'Roboto Mono', Helvetica, Arial, sans-serif;
    margin: auto;
  }

  .header-text {
    color: #1E2F53;
    font-size: 2rem;
    letter-spacing: .8px;
    margin-bottom: 1.5rem;
  }

  .primary-text {
    font-size: 1rem;
    color: #666;
    letter-spacing: .8px;
    line-height: 1.8rem;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
  }

  .page-container {
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .page-container>* {
    flex: 1 1 100%;
    margin: 1rem;
  }

  @media (min-width: 13.5rem) {

      .flex-container {
          padding: 0 2rem;
      }

      .page-container {
          padding: 0 2rem;
      }

      .page-container>* {
          flex-basis: calc(50% - 2rem);
      }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
