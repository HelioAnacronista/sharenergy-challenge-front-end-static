import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
   background: ${props => props.theme.colors.background};
}

body {
   color : ${props => props.theme.colors.text};
}

.container-main {
   width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.mt-30 {
   margin-top: 30px;
}

.mb-300 {
   margin-bottom: 300px;
}

.mb-100 {
   margin-bottom: 100px;
}

.flex {
   display: flex;
}

.center {
  display: flex;
  justify-content: center;
}

//up and down.
.my-20 {
   margin: 20px 0;
}

//side r, side l.
.mx-20 {
   margin: 0 20px;
}

//up and down.
.my-30 {
   margin: 30px 0;
}

//side r, side l.
.mx-30 {
   margin: 0 30px;
}

.flex-c {
   display: flex;
   align-items: center;
}

.box-shadow-b {
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.border-radios-1px {
   border: 1px solid rgba(114,114,126,.2)
}

//ativer menu-nav
.active {
     box-shadow: #ea5358 0px 2px 0px;
     padding: 6px;
     border-radios: 20px;
     font-weight 600
}

//btn crud 
.btn-action-style {
   background-color: ${props => props.theme.colors.background};
}



//style button global
.btn-style-global {
 padding: 0.8em 1.8em;
 border: 2px solid #333;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-weight: 600;
 transition: .3s;
 z-index: 1;
 color: ${props => props.theme.colorsBtn.colorDefault.Color}
}

.btn-style-global::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: ${props => props.theme.colorsBtn.colorHover.Background};
 transition: .5s ease;
 display: block;
 z-index: -1;
}

.btn-style-global:hover::before {
 width: 105%;
}

.btn-style-global:hover {
 color: ${props => props.theme.colorsBtn.colorHover.Color};
}

`;