import { 
  GET_SINGLEUSER, GET_SINGLEUSER_REPOS, 
  SEARCH_USERS,
  CLEAR_USERS, 
  LOAD_USERS,
  SET_LOADING } from "../Type";

 const GithubReducer = (state, action)=>{
  switch(action.type){
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }  
     case GET_SINGLEUSER:
       return {
         ...state,
         singleUser: action.payload,
         loading: false
       } 
     case GET_SINGLEUSER_REPOS:
       return {
         ...state,
         singleUserRepos: action.payload,
         loading: false
       }  
    case SET_LOADING:
      return{
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default GithubReducer;