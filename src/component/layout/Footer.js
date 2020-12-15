import React, { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';

 const Footer = () => {
   const githubContext = useContext(GithubContext);
   const {users} = githubContext;
   let footerStlye;
   users.length <= 0 && (
  footerStlye = {
  position: 'fixed',
  width: '100%',
  bottom: '0%'
  }
  );

  return (
    <div>
      <div className = "text-center py-2 bg-light mt-2" style ={footerStlye} >
        <p>Built By Ayes &copy; 2020, All Right Reserved</p>
      </div>
    </div>
  )
  
}

export default Footer;