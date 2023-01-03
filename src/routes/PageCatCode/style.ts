import styled from "styled-components";


export const Container = styled.div`

.card-select {
   margin: 5px;
   width: 400px;
   background-color: ${props => props.theme.colors.background}
   margin-top: 30px;
   padding: 5px;
   border-radius: 5px;
   
   .card-title-two {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   
}

h2 {
   padding: 5px;
      
}

.card-cat-img {
   background-color: #000000;
}

.input-code input{
   padding: 10px;
   margin: 10px;
}

.mb-100 {
   margin-button: 100px;
}

.icon-list {
   margin-top: 5px;
}

.btn-style-global-btn-cat {
 padding: 1px;
 width: 100px;
 height: 50px;
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

.btn-style-global-btn-cat::before {
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

.btn-style-global-btn-cat:hover::before {
 width: 105%;
}

.btn-style-global-btn-cat:hover {
 color: ${props => props.theme.colorsBtn.colorHover.Color};
}
`