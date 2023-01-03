import styled from "styled-components";

export const Container = styled.div`


.container-search {
   margin: 30px 0;
}


border-radius: 1rem;
background: #e8e8e8;



`

export const ContainerPagination = styled.div`

.card-controller-pagination {
   width: 100%;
   display: flex;
   align-items: center;
   padding: 1px;
   background: ${props => props.theme.colors.background};
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.btn-difine {
   margin-left: 80px;z
}

.btn-search {
 padding: 3px;
 width: 50px;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-weight: 600;
 transition: .3s;
 z-index: 1;
 color: #333;
}

.search-bar {
   margin-left: 130px;
   margin-top: 18px;
}

.btn-search::before {
}

.btn-search:hover::before {
 width: 105%;
}

.btn-search:hover {
 color: #ea5556;
}

.input {
   width: 300px;
margin-left: 20px;
 border: none;
 padding: 4px;
 border-radius: 1rem;
 background: #e8e8e8;
 transition: 0.3s;
}
.input::placeholder {
   margin-right: 10px;
}

.input:focus {
 outline-color: none;
 background: #e8e8e8;
 transition: 0.3s;
}
`
