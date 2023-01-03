import { Container } from "./style";

import { useNavigate } from 'react-router-dom';

import * as clientServices from '../../services/client-services';
import ListClient from './ListClient';

function PageClientCrud() {

   const navigate = useNavigate();

   function handleNewClick() {
      navigate("/client/create");
   }

   return (
      <>
         <Container>
            <div className="mb-300 container-main">
               <div className='btn-create my-20' onClick={handleNewClick}>
                  <button disabled className="btn-style-global box-shadow-b">
                     CRIAR
                  </button>
               </div>

               <div className="center">
                  <table>
                     <thead>
                        <tr>
                           <th>Nome</th>
                           <th>Email</th>
                           <th>Telefone</th>
                           <th>Endereço</th>
                           <th>CPF</th>
                           <th>editar</th>
                           <th>deletar</th>
                        </tr>
                     </thead>

                     <tbody>
                        {
                           clientServices.findAll().map(obj => <ListClient key={obj.id} client={obj}></ListClient>)
                        }
                     </tbody>

                  </table>
               </div>
            </div>
         </Container>

      </>
   );
}

export default PageClientCrud;