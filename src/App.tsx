import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from './routes';
import {GlobalStyle} from './styles/global';

const App: React.FC = () => {
  return  (
    
  //React exige um componente de nível raíz, aplicando o fragment você contorna isso  
    <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle/>
    </>
  )
}

export default App;
