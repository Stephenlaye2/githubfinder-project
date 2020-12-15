import React from 'react';

const ReposItem = ({repo}) => {
  const {name, html_url} = repo;
    return (
      <div className = "card" >
        <a href = {html_url} target = "_blank" rel = "noreferrer" > <h3> {name} </h3> </a>
      </div>
    );
  }


export default ReposItem
