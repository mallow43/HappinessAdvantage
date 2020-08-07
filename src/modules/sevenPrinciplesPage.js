import React from "react"
import Home from "./home"
import ChangePage from "./changePage"
import ReactFullpage from "@fullpage/react-fullpage";

class SevenPrinciplesPage extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="header2">
                    <h3 id="sevenHeader">THE SEVEN PRINCIPLES</h3>
                </div>
                <div className="ui container main">
                    <ReactFullpage

                        render={({ state, fullpageApi }) => {
                            return (
                                <div id="fullpage-wrapper">
                                    <Home />
                                    <ChangePage />

                                </div>
                            )
                        }}
                    />

                </div>
            </div>
        )
    }
}
export default SevenPrinciplesPage