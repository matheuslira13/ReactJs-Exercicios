
import './App.css';
import Home from './Main/Home'
import Header from './Main/header';
import Footer from './Main/footer';
import Aula5 from './Aulas/modulo-2-Aula-5/Aula5-Props-Inicio';
import Aula7 from './Aulas/modulo-2-Aula-7/aula7-styled-component-Inicio';
import Aula9 from './Aulas/modulo-2-Aula-9/aula9-useState-Inicio';
import Aula12 from './Aulas/modulo-2-Aula-12/aula12-CalculadoDeGorjeta';
import Aula13 from './Aulas/modulo-2-Aula-13/aula13-useEffect';
import Aula14 from './Aulas/modulo-2-Aula-14/aula14-CominicacaoEntreComponentes';
import Aula16 from './Aulas/modulo-2-Aula-16/aula-16-UsandoList';
import Aula17 from './Aulas/modulo-2-Aula-17/aula-17-AddItemsNaLista';
import Aula18 from './Aulas/modulo-2-Aula-18/aula-18-LocalStorage';
import Aula19 from './Aulas/modulo-2-Aula-19/aula19-CriandoModal'
import { Route, Link, Switch, BrowserRouter, Router } from 'react-router-dom';
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0B5AD9',

    },
    secondary: {
      main: '#EB4A17',
    },
    initial: {
      main: '#FFFFFF',
    }
  },
  shape: {
    borderRadius: 20,

  }
});



function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch >

            <Route exact={true} path='/'>
              <Home />
            </Route>

            <Route path='/Props'>
              <Aula5 />
            </Route>

            <Route path='/StyledComponent'>
              <Aula7 />
            </Route>

            <Route path='/UseState'>
              <Aula9 />
            </Route>

            <Route path='/Calculadora'>
              <Aula12 />
            </Route>

            <Route path='/UseEffect'>
              <Aula13 />
            </Route>

            <Route path='/Comunicacao'>
              <Aula14 />
            </Route>

            <Route path='/Criando-uma-Lista'>
              <Aula16 />
              <Aula17 />
            </Route>

            <Route path='/LocalStorage'>
              <Aula18 />
            </Route>

            <Route path='/Criando-um-modal'>
              <Aula19 />
            </Route>

        </Switch>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
