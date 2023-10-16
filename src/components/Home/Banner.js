import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
 bugfix/gitignore
        <p>PLEASE SHOW UP TESTING TESTING better place to share your knowledge! Hooray!</p>
 main
      </div>
    </div>
  );
};

export default Banner;
