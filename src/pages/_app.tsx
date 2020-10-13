import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import normalize from 'styled-normalize'
import { mindBuilderTheme } from 'mind-builder.theme'
import '../styles/font.css'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family : ${({ theme }) => theme.fontFamily.regular}
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mindBuilderTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
