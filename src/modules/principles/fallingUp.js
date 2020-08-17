import React from 'react';
import { Responsive } from 'semantic-ui-react';
class FallingUp extends React.Component {
    render() {
        return (
            <div id="tall">
                <div className="ui container">
                    <Responsive minWidth={768}>
                        <h3>FALLING UP</h3>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <div className="header">
                            <h3>FALLING UP</h3>
                        </div>
                    </Responsive>
                    <p></p>
                </div>
                <div id="semiFooter">
                    <p>
                        “Things do not necessarily happen for the best, but some people are able to make the best out of
                        things that happen.”—Tal Ben-Shahar
                    </p>
                </div>
            </div>
        );
    }
}
export default FallingUp;
