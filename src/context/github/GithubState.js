import React, {useReducer} from 'react';
import axios from 'axios';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';

import {
  LOAD_USERS,
  GET_SINGLEUSER,
  GET_SINGLEUSER_REPOS,
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  // SHOW_ALERT,
  // REMOVE_ALERT
} from '../Type';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV === "production"){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

export const GithubState = (props) => {
  const initialstate = {
    users: [],
    singleUser: {},
    singleUserRepos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  const setLoading = () => dispatch({
      type: SET_LOADING
    })
  
    // Load Users
    const loadUsers = async() =>{
      setLoading();
    const resp = await axios.get(`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch(
      {
        type: LOAD_USERS,
        payload: resp.data
    }
    )
  }
    // Search Users
    const searchUsers = async (text) =>{
      setLoading();
      const resp = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
  
      dispatch(
        {
          type: SEARCH_USERS,
          payload: resp.data.items,
        }
      );
    }
// Clear users
 const clearUsers = () =>{
    dispatch({
     type: CLEAR_USERS
    })
  }

    // Get single user
    const getSingleUser = async (username) => {
      setLoading();
      const resp = await axios.get(`https://api.github.com/users/${username}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
  
      dispatch({
        type: GET_SINGLEUSER,
        payload: resp.data
      })
      
    }

    // Get Single user repos
    const  getSingleUserRepos = async (username) => {
    setLoading();
      const resp = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
  
      dispatch({
        type: GET_SINGLEUSER_REPOS,
        payload: resp.data
      });
      
    }
  return (
    <GithubContext.Provider value ={
      {
        users: state.users,
        singleUser: state.singleUser,
        singleUserRepos: state.singleUserRepos,
        loading: state.loading,
        loadUsers,
        searchUsers,
        clearUsers,
        getSingleUser,
        getSingleUserRepos
      }
    } >
    {props.children}

    </GithubContext.Provider>
  )
}

export default GithubState;