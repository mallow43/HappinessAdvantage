import React from 'react';
import Home from './modules/home';
import ChangePage from './modules/changePage';
import SevenPrinciplesPage from './modules/sevenPrinciplesPage';
import './App.css';

import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <ReactFullpage
                // verticalCentered={false}
                responsiveWidth
                render={({ state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">
                            <Home id="home" />
                            <ChangePage id="section2" />
                            <SevenPrinciplesPage fullpageApi={fullpageApi} id="section3" />
                        </div>
                    );
                }}
            />
        );
    }
}

export default App;
