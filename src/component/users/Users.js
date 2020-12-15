import React, {useContext, useEffect} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';


 const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loadUsers, users, loading} = githubContext;
  useEffect( ()=>{
    loadUsers()
    // eslint-disable-next-line
  }, []);
if(loading){
return <Spinner />
}else{
    return (
      <div style = {listStyle}>
         {users.map((user)=>(
           <UserItem key = {user.id} user = {user} />
         ))}
      </div>
    );
  }
}

const listStyle = {
  display: 'grid',
  gridTemplateColumns:'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default Users;