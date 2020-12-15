import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';

 const Search = ( ) => {
   const githubContext = useContext(GithubContext);
   const alertContext = useContext(AlertContext);
   const {searchUsers, clearUsers} = githubContext;
   const {showAlert} = alertContext;

   const [text, setText] = useState('');
 
   
  const onChange = (e)=>{
    setText(e.target.value);
    // this.setState({[e.target.name]: e.target.value})
  }
 const  onSubmit = (e) => {
    e.preventDefault();
if(text !== ''){
    searchUsers(text);
    setText('');
    // this.setState({text: ''});
  }else{
    const message = 'Please fill the search form',
    type = 'danger';
    showAlert(message, type);
  }
  }
  
    return (
      <div>
      <form onSubmit = {onSubmit}>
        <input type = "text" name = "text" value = {text} placeholder = "Search github users" onChange = {onChange} style = {{outline: 'none'}} />
        <input className = "btn btn-primary btn-block" type = "submit"  value = "Search" style = {{opacity: "0.4", fontWeight: "bold", fontSize: "18px", borderRadius: "4px" }} />
      </form>
      {githubContext.users.length>0 && (
      <button className = "btn btn-light btn-block"  onClick = {clearUsers} >Clear Users </button> 
      
      )
      }

      </div>
    )
}

export default Search;
