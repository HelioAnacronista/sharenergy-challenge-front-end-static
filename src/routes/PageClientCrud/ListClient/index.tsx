import { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonDelete from '../../../components/UI/ButtonDelete';
import ButtonEdit from '../../../components/UI/ButtonEdit';
import { ClientDTO } from '../../../models/client';

type Props = {
   client: ClientDTO;
}

function ListClient({ client }: Props) {

   


   return (
      <>
         <tr>
            <td>{client.nome}</td>
            <td>{client.email}</td>
            <td>{client.telefone}</td>
            <td>{client.endereço}</td>
            <td>{client.cpf}</td>
       
            <td className='center'> <ButtonEdit></ButtonEdit></td>
    
            <td><ButtonDelete onClick={() => {}}></ButtonDelete> </td>
         </tr>
      </>
   );
}

export default ListClient;