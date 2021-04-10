
import './App.css';
import Aula5 from './Aulas/modulo-2-Aula-5/Aula5-Props-Inicio';
import Aula7 from './Aulas/modulo-2-Aula-7/aula7-styled-component-Inicio';
import Aula9 from './Aulas/modulo-2-Aula-9/aula9-useState-Inicio';
import Aula12 from './Aulas/modulo-2-Aula-12/aula12-CalculadoDeGorjeta';
import Aula13 from './Aulas/modulo-2-Aula-13/aula13-useEffect';
import Aula14 from './Aulas/modulo-2-Aula-14/aula14-CominicacaoEntreComponentes';
import Aula16 from './Aulas/modulo-2-Aula-16/aula-16-UsandoList';
import Aula17 from './Aulas/modulo-2-Aula-17/aula-17-AddItemsNaLista';
import Aula18 from './Aulas/modulo-2-Aula-18/aula-18-LocalStorage';
import React from 'react';
import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0B5AD9',
     
    },
    secondary: {
      main: '#EB4A17',
    },
    initial:{
      main:'#FFFFFF',
    }
  },
  shape: {
    borderRadius: 20,
  
}
});



function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Aula5/>
      <Aula7/>
      <Aula9/>
      <Aula12/>
      <Aula13/>
      <Aula14/>
      <Aula16/>
      <Aula17/>
      <Aula18/>
      </ThemeProvider>
  );
}

export default App;
