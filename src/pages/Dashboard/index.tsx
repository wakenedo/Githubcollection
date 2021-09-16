import React from 'react';
import {Title, Form, Repos} from './styles';
import {FiChevronRight} from 'react-icons/fi'
//import Logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return  (
      <>
      {/*<img src={Logo} alt='GitCollection'/>*/}
      <Title>Github Catalog</Title>
      <Form>
          <input placeholder='username/repository_name'/>
          <button type='submit'>Search</button>
      </Form>

      <Repos>
        <a href='/repositories'>
            <img src='' alt='Repository' />
            <div>
                <strong>wakenedo/mini-curso-reactjs</strong>
                <p>Repositorio do mini curso de React.js</p>
            </div>
            <FiChevronRight size={20}/>
        </a>
        {/*Instalamos o React icons, para utilizar diversas bibliotecas de icones 
        com facilidade. material ui, fonts awasome, bootstrap, feather icons*/}

      </Repos>
      </>
  )
};

