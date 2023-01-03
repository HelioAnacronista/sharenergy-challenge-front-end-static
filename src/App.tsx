import { useState } from 'react';

//routes
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


//Pages 
import Home from './routes/Home';
import Login from './routes/Login';
import PageClientCrud from './routes/PageClientCrud';
import ClientFrom from './routes/PageClientCrud/ClientFrom';
import PageRadomUser from './routes/PageRadomUser';
import PageDog from './routes/PageDog';
import PageCatCode from './routes/PageCatCode';

//themes styles 
import dark from './style/themes/dark';
import light from './style/themes/light';

//Function themes
import usePersistendStates from './utils/usePersistendStates';
import { DefaultTheme, ThemeProvider } from 'styled-components';


function App() {

  const [theme, setTheme] = usePersistendStates<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home theme={toggleTheme} />} >
              <Route index element={<PageRadomUser />} />
              <Route path="pageTwo" element={<PageCatCode />} />
              <Route path="pageThree" element={<PageDog />} />
              <Route path="pageFour" element={<PageClientCrud />} />
              <Route path="pageFour/:clientId" element={<ClientFrom />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

