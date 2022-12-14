import React from 'react';

function JSXVariables() {
  const name = "John";
  const nameLength = name.length;
  const thoughts = "react is ok";


  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
