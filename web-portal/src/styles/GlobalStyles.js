import '@fontsource/sirin-stencil'
import '@fontsource/kaushan-script'
import '../assets/Fonts/Bodaciou.ttf'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

${
  '' /* *{
    outline: 1px solid red !important;
}  */
}

@font-face {
  font-family: "Bodacio2";   /*Can be any text*/
  src: local("Bodacio2"),
    url("../assets/Fonts/Bodaciou.ttf") format("truetype");
}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`

export default GlobalStyles
