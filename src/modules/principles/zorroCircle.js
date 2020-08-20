import React from 'react';
import { Responsive, Image } from 'semantic-ui-react';

class ZorroCircle extends React.Component {
    render() {
        return (
            <div id="tall">
                <div className="ui container">
                    <Responsive minWidth={768}>
                        <h3>ZORRO CIRCLE</h3>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <div className="header">
                            <h3>ZORRO CIRCLE</h3>
                        </div>
                    </Responsive>

                    <div className="ui container grid stackable">
                        <div className="seven wide column">
                            <Responsive minWidth={768}>
                                <Image src="https://images.unsplash.com/photo-1577303600246-c694ab6ad8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1552&q=80" />
                            </Responsive>
                        </div>
                        <div className="sixteen wide column eight wide computer column">
                            <p>
                                One of the most important drivers of well being and performance is believing that you
                                are in control after all if you don’t think you are in control of your performance at
                                work how do you expect to improve it. And that is what this principle is about being
                                able to go one step at a time because while you may not feel in control of an entire
                                project or aspect of your life is you break it into smaller pieces you can learn to feel
                                more in control of your situation and thus increase performance and well being.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="semiFooter" className="ui container">
                    <p>
                        “Things do not necessarily happen for the best, but some people are able to make the best out of
                        things that happen.”
                    </p>
                    <p>Tal Ben-Shahar</p>
                </div>
            </div>
        );
    }
}
export default ZorroCircle;
