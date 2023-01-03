import { useCallback, useEffect, useMemo, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import Select from 'react-select';

import Pagination from '../../components/Pagination';
import CardUsers from '../../components/UI/CardUsers';
import { usersDTO } from '../../models/radomUser';
import * as userServices from '../../services/random-user-services';
import { Container, ContainerPagination } from './style';



type pagination = {
   page: number,
   size: number
}

function PageRadomUser() {

   //lista de usuarios
   const [users, setUsers] = useState<usersDTO[]>([])
   //barra de pequisa
   const [search, setSearch] = useState('')
   //tamanho da pagina  
   const [sizePage, setSizePage] = useState<number>(10);
   //numero da pagina
   const [currentPage, setCurrentPage] = useState<number>(1);
   //valor total das paginas
   const lastPage = 4;

   //Filter search
   const filterUsers: usersDTO[] =
      search.length > 0 ? users.filter(obj => {
         return (
            obj.name.first.includes(search) ||
            obj.name.last.includes(search) ||
            obj.login.username.includes(search) ||
            obj.email.includes(search)
         )
      })
         : users

   const Options = [
      { value: '5', label: '5' },
      { value: '10', label: '10' },
      { value: '20', label: '20' },
      { value: '50', label: '50' }
   ]


   
   useEffect(() => {
      userServices.getRandomUsers(currentPage, sizePage).then(res => {
         setUsers(res)
      })
   }, [currentPage, sizePage]);

   //input search
   function handleSubmit(event: any) {
      event.preventDefault();
   }
   function handleChange(event: any) {
      setSearch(event.target.value)
   }



   return (
      <>
         <Container className='container-main'>


            <div className='container-search'>


               <ContainerPagination>
                  <div className='card-controller-pagination flex-c'>

                  <form className="search-bar" onSubmit={handleSubmit}>
                     <input className="input" value={search} onChange={handleChange}
                        type="text" placeholder=" Nome.. E-mail.. Username.."
                     />
                     <button className="btn-search" type="submit"> <MdSearch></MdSearch> </button>
                  </form>

                     <div className='mx-30'>
                        <div>
                           <h1>Páginas</h1>
                        </div>

                        <Pagination
                           currentPage={currentPage}
                           lastPage={lastPage}
                           maxLength={7}
                           setCurrentPage={setCurrentPage}
                        />
                     </div>
                     <div className='my-20'>
                        <h1>Tamanho da Páginas</h1>
                        <Select
                           className="basic-single"
                           classNamePrefix="select"
                           options={Options}
                           onChange={obj => {
                              let v;
                              if (obj?.value === "5") {
                                 v = 5;
                              }
                              if (obj?.value === "10") {
                                 v = 10;
                              }
                              if (obj?.value === "20") {
                                 v = 20;
                              }
                              if (obj?.value == "50") {
                                 v = 50;
                              }
                              else {
                                 v = 20
                              }
                              setSizePage(v);
                           }}
                        />
                     </div>
                  </div>
               </ContainerPagination>


               

            </div>

            {
               filterUsers.map(users => {
                  return <CardUsers key={users.login.uuid} usersDTO={users}></CardUsers>
               }) 
            
            }



         </Container>
      </>
   );
}

export default PageRadomUser;

function useDefine() {
   throw new Error('Function not implemented.');
}

