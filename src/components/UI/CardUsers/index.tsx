import { usersDTO } from '../../../models/radomUser';
import { Container } from './style';

type Props = {
   usersDTO : usersDTO
}

export function CardUsers({usersDTO}: Props) {

   
   return (
      <Container className='card my-20 box-shadow-b'>

         <div className='card-info flex-c'>

            <div className='card-users-left'>
               <div className='card-users-img'>
                  <img className='formt-img box-shadow-b' src={usersDTO.picture.large} alt="" />
               </div>
            </div>

            <div className='card-users-right'>

               <div className='read-text'>
                  <div>
                     <h2>Nick: </h2>
                  </div>
                  <div>
                     <h3>{usersDTO.login.username}</h3>
                  </div>
               </div>
               <div style={{border: "1px solid rgba(0, 0, 0, 0.131)"}}></div>
               
               <div className='read-text'>
                  <div>
                     <h2>Nome: </h2>
                  </div>
                  <div>
                     <h3>{usersDTO.name.first} {usersDTO.name.last}</h3>
                  </div>
               </div>
               <div style={{border: "1px solid rgba(0, 0, 0, 0.131)"}}></div>

               <div className='read-text'>
                  <div>
                     <h2>Email: </h2>
                  </div>
                  <div>
                     <h3>{usersDTO.email}</h3>
                  </div>
               </div>
               <div style={{border: "1px solid rgba(0, 0, 0, 0.131)"}}></div>
               
               <div className='read-text'>
                  <div>
                     <h2>Age:</h2>
                  </div>
                  <div>
                     <h3>{usersDTO.dob.age}</h3>
                  </div>
               </div>
               <div style={{border: "1px solid rgba(0, 0, 0, 0.131)"}}></div>
            </div>
         </div>

      </Container>


   );
}

export default CardUsers;