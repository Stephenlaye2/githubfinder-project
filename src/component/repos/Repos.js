import React from 'react';
import ReposItem from './ReposItem';


const Repos = ({singleUserRepos}) => {
  
    return (
      <div>
        {singleUserRepos.map((repo) => (
          <ReposItem repo = {repo} key = {repo.id} />
        ))}
      </div>
    )
}


export default Repos
