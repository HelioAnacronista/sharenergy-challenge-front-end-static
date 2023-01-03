import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      title: string,

      colors: {
         primary: string,
         secundary: string,

         background: string,
         text: string
      },
      colorsBtn: {
         colorDefault: {
            Background: string,
            Color: string,
         },
         colorHover: {
            Background: string,
            Color: string,
         }

      }
   }
}