import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";

import GlobalStyle from "../../style/global";
import Footer from "../../components/Footer";

type Props = {
   theme() : void
}

function Home({theme}: Props) {
   return (
      <>
         <GlobalStyle />
         <HeaderMain toggleTheme={theme} />
         <Outlet />
         <Footer></Footer>
      </>
   );
}

export default Home;