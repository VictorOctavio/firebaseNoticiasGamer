import React from 'react';

//Theme Aplication
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './ThemeConfig'

//Components
import ContenedorPrincipal from './pages/ContenedorPrincipal';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContenedorPrincipal/>
    </ThemeProvider>
  );
}

export default App;
