import React, { Fragment } from 'react';

 const About = () => {
   
    return (
      <Fragment>
        <div className = "container" style = {aboutStyle} >
      <h3>About GitHub Finder Project</h3>
      <p>This is a project built for the purpose of finding github users based on name query. You can find out more about each user by click the <strong>More</strong> button which will take you to the profile page</p>
      <p>version: 1.0.0</p>
      </div>
      </Fragment>
    )
}

const aboutStyle = {
  textAlign: 'center',
  border: '1px solid #f542ec',
  borderRadius: '8px',
  margin: '4rem auto',
  padding: '0.5rem'
}
export default About;