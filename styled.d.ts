import 'styled-components'
// https://coolors.co/068d9d-53599a-6d9dc5-80ded9-aeecef-ff715b
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueMunsell: string
      liberty: string
      ceruleanFrost: string
      middleBlueGreen: string
      blizzardBlue: string
      bitterSweet: string
    }
    fontFamily: {
      regular: string
      semiBold: string
      medium: string
      light: string
    }
  }
}
