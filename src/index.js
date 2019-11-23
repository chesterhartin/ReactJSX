// import react / react dom libraries
import React from 'react';
import ReactDOM from 'react-dom'; // from WebPack

// create a react component
// const App = () => {
//         return <div> Hi there! </div>;
// };

function getButtonText()
{
    return 'Click on Me';
}

const App = () => {
    const buttonText = 'Click Me';

    return (
      <div>
        <label className="label" htmlFor="name">
          Enter Name:
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {getButtonText()}
        </button>
      </div>
    );
    
};

// Take the react component and show it on the screen
ReactDOM.render( 
    <App /> ,
    document.querySelector('#root')
);