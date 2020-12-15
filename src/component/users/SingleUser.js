import React, { Fragment, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';


const SingleUser = ({match}) => {
const githubContext = useContext(GithubContext);

const {singleUser, singleUserRepos, getSingleUser, getSingleUserRepos, loading} = githubContext;
   useEffect(() =>{
     getSingleUser(match.params.login);
     getSingleUserRepos(match.params.login);
    //  eslint-disable-next-line
   }, [])
   
    const {
      login, 
      name,
      bio,
      avatar_url,
      html_url,
      company,
      blog,
      followers,
      following,
      public_gists,
      public_repos,
      location,
      hireable
    } = singleUser;
    
    if(loading){
      return <Spinner />
    }else{
    return (
      <Fragment>
        <Link to='/' className = 'btn btn-dark'>Back to Search</Link>
        Hirable: {''}
         {hireable? <i className ='fas fa-check text-success'/> : <i className ='fas fa-times-circle text-danger'/>}

         <div className = "grid-2 card" >
           <div className = "all-center">
             <img className = "img my-2" src = {avatar_url} alt = {login} style = {{width: '200px'}} />
             <p><strong> Name: </strong> {name} </p>
             <p><strong>Location:</strong> {location} </p>
             <a className = "btn btn-dark" href = {html_url} target = "_blank" rel = "noreferrer" >View Github Profile</a>
             </div>
           <div className = "my-2" >
             {bio &&
             <Fragment>
             <h3 className = "text-center" >Bio</h3>
             <hr/>
             <p> {bio} </p>
             </Fragment>
             }
             <p><strong>Username:</strong> {login} </p>
             <p><strong>Company:</strong> {company} </p>
             <p><strong>Website:</strong> {blog} </p>
           </div>
         </div>

         <div className = "card text-center" >
            <div className = "badge badge-primary" >Followers: {followers}</div>
            <div className = "badge badge-success" >Following: {following}</div>
            <div className = "badge badge-danger" >Public Repos: {public_repos}
            </div>
            <div className = "badge badge-light" >Public Gists: {public_gists}
            </div>
         </div>
         <Repos singleUserRepos = {singleUserRepos} />
      </Fragment>
    )
  }
  }

export default SingleUser;