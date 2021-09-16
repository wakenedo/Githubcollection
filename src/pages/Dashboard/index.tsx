import React from 'react';
import {Title, Form} from './styles';
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
      </>
  )
};

