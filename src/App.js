import React from 'react';
import Home from "./modules/home"
import ChangePage from "./modules/changePage"
import SevenPrinciplesPage from "./modules/sevenPrinciplesPage"
import './App.css';


import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <ReactFullpage

        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <Home />
              <ChangePage />
              <SevenPrinciplesPage fullpageApi={fullpageApi} />
            </div>
          );
        }}
      />
    );
  }
}



export default App;
