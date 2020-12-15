import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({user}) =>{
    const {login, avatar_url} = user;
    return (
      <div className = "card text-center" >
        <img src = {avatar_url} alt = {login} style = {{width: '100px', borderRadius: '50%'}} />
       <p>{login}</p>
       <div>
       <Link className = "btn btn-primary" to={`/user/${login}`}  style = {{borderRadius: '5px'}} >More</Link>
       </div>
      </div>
    )
}
UserItem.propTypes = {
user: PropTypes.object.isRequired,
}
export default UserItem
