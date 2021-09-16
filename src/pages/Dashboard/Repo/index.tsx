import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, RepoInfo, Issues } from './styles'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>();
  return  (
  <>
  <Header>
    <FiChevronLeft/>
    <Link to='/'>Voltar</Link> 
  </Header>

  <RepoInfo>
    <header>
      <img src='' alt='Alexandre Developer' />
      <div>
        <strong>wakenedo/mini-curso-reactjs</strong>
        <p>Repositorio do mini-curos de reactjs</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>2330</strong>
        <span>Stars</span>
      </li>
      <li>
        <strong>210</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>79</strong>
        <span>Issues abertas</span>
      </li>      
    </ul>
  </RepoInfo>

  <Issues>
    <Link to='/'>
      <div>
        <strong>sdadasdasdasdasda</strong>
        <p>sadasdasdasdasdads</p>
      </div>

      <FiChevronRight size={20}/>
    </Link>
  </Issues>
  </>
  );
};
