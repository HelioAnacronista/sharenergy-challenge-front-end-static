import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import CustomNavLink from '../UI/CustomNavLink';

import { MdHomeFilled, MdHttp, MdOutlineGroup, MdPets } from "react-icons/md";

import { FaReact } from "react-icons/fa";

type Props = {
   toggleTheme(): void;
}

function HeaderMain({ toggleTheme }: Props) {

   const { colors, title } = useContext(ThemeContext)



   return (
      <>
         <Container className='box-shadow-b'>

            <div className="header">
               {/*   <!--Content before waves--> */}

               <div className="inner-header flex">
                  {/*   <!--Just the logo.. Don't mind this-->*/}


                  <FaReact size={50} className="mx-20 icon-header" ></FaReact>

                  <h1>DESAFIO SHARENERGY</h1>
               </div>

               {/*   <!--Waves Container--> */}
               <div>
                  <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                     <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                     </defs>
                     <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                     </g>
                  </svg>
               </div>
               {/*    <!--Waves end-->    */}


            </div>
            {/*   <!--Header ends-->          */}


            {/*    <!--MENU NAV--> */}
            <div className="content flex">

               <div className='nav-bar'>
                  <div className='mx-20'>
                     <CustomNavLink to={''} title={'HOME'} icon={<MdHomeFilled />} />
                  </div>
                  <div>
                     <div className='mx-20'>
                        <CustomNavLink to={'/pageTwo'} title={'CAT CODE'} icon={<MdHttp size={27} />} />

                     </div>
                  </div>
                  <div>
                     <div className='mx-20'>
                        <CustomNavLink to={'/pageThree'} title={"GIVE'M DOG"} icon={<MdPets size={21} />} />
                     </div>
                  </div>
                  <div>
                     <div className='mx-20'>
                        <CustomNavLink to={'/pageFour'} title={'BUILDING...'} icon={<MdOutlineGroup />} />
                     </div>
                  </div>


                  <div className='mx-20'>
                     <Switch
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedIcon={false}
                        uncheckedIcon={false}

                        height={10}
                        width={40}
                        handleDiameter={20}
                        offColor={colors.secundary}
                        onColor={colors.primary}
                        onHandleColor={'#333'}
                     />
                  </div>
               </div>


            </div>
            {/*     <!--Content ends-->   */}

         </Container>
      </>
   );
}

export default HeaderMain;