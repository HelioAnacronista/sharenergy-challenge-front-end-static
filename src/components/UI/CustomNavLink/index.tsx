
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import styled from 'styled-components';

type Props = {
   to: string
   title: string
   icon: React.ReactElement
}

export const Container = styled.span`

`

const CustomNavLink = ({ to, title, icon }: Props) => {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });

   return (
      <NavLink to={to} className={`box-menu-nav ${match ? '' : ''}`} >
         <Container>
            <div>
               {title}
            </div>

            <div className='menu-icons'>
               {icon}
            </div>
         </Container>
      </NavLink>
   )
}

export default CustomNavLink;