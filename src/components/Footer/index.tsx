import { Container } from "./style";

import { GoMarkGithub } from "react-icons/go";


function Footer() {
   return (
      <>
         <Container>
            <div className="grid-layout mx-20">

               <p id="direitos-autorais"> © 2023 Helio Fernandes</p>

               <div className="flex">
                  <div>
                     <p>repository</p>
                  </div>
                  <div className="mx-20">
                     <GoMarkGithub size={30}></GoMarkGithub>
                  </div>
               </div>
            </div>
         </Container>
      </>

   );
}

export default Footer;