import React from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Title, Form, Repos, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi'


interface GithubRepository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    },
}
export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>(() =>{
      const storageRepos = localStorage.getItem('@GitCollection:repositories');

      if (storageRepos) {
          return JSON.parse(storageRepos);
      }
      return [];
  });  
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  React.useEffect(() => {
      localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
  }, [repos]);
  
  function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) : void {
      setNewRepo(event.target.value);
  }
  
  async function handleAddRepo(
      event:React.FormEvent<HTMLFormElement>
   ): Promise<void> {
      event.preventDefault();

      if(!newRepo) {
          setInputError('Type the username/repository');
          return;
      }
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);

      console.log(response)

      const repository = response.data;
      
      
      setRepos([...repos, repository]);
      setNewRepo('')
  }
  
  return  (
      <>
      {/*<img src={Logo} alt='GitCollection'/>*/}
      <Title>Github Catalog</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
          <input placeholder='username/repository_name' 
          onChange={handleInputChange}/>
          <button type='submit'>Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repos>
        {repos.map(repository => (
            <Link
                to={`/repositories/${repository.full_name}`} 
                key={repository.full_name}>
            <img 
                src={repository.owner.avatar_url} 
                alt={repository.owner.login}
            />
            <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20}/>
        </Link>
        ))}

      </Repos>
      </>
  )
};

