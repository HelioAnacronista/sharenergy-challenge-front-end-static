import styled from "styled-components";

export const Container = styled.div`
.header {
   position: relative;
   text-align: center;
   background: linear-gradient(60deg, #f7ba2b 0%, #ea5358 100%);
   color: white;
 }

 .icon-header {
  margin-top: 10px;
 }
 
 .logo {
   width: 50px;
   fill: white;
   padding-right: 15px;
   display: inline-block;
   vertical-align: middle;
 }
 
 .inner-header {
   width: 100%;
   margin: 0;
   padding: 0;
 }
 
 .flex {
   /*Flexbox for containers*/
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
 }
 
 .waves {
   position: relative;
   width: 100%;
   height: 15vh;
   margin-bottom: -7px;
   /*Fix for safari gap*/
   min-height: 100px;
   max-height: 150px;
 }
 
 .content {
   position: relative;
   height: 90px;
   text-align: center;
   background-color: ${props => props.theme.title === 'light' ? '#FFF' : props.theme.colors.primary};
 }
 
 /* Animation */
 
 .parallax>use {
   animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
 }
 
 .parallax>use:nth-child(1) {
   animation-delay: -2s;
   animation-duration: 7s;
 }
 
 .parallax>use:nth-child(2) {
   animation-delay: -3s;
   animation-duration: 10s;
 }
 
 .parallax>use:nth-child(3) {
   animation-delay: -4s;
   animation-duration: 13s;
 }
 
 .parallax>use:nth-child(4) {
   animation-delay: -5s;
   animation-duration: 20s;
 }
 
 @keyframes move-forever {
   0% {
     transform: translate3d(-90px, 0, 0);
   }
 
   100% {
     transform: translate3d(85px, 0, 0);
   }
 }
 
 /*Shrinking for mobile*/
 @media (max-width: 768px) {
   .waves {
     height: 40px;
     min-height: 40px;
   }
 
   .content {
     height: 30vh;
   }
 
   h1 {
     font-size: 24px;
   }
 }

.nav-bar {
   display : flex;
   align-items: center;
}



`