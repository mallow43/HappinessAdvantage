import React from 'react';
import { Responsive, Image } from 'semantic-ui-react';

class TwentySecond extends React.Component {
    render() {
        return (
            <div id="tall">
                <div className="ui container">
                    <Responsive minWidth={768}>
                        <h3>TWENTY SECOND RULE</h3>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <div className="header">
                            <h3>TWENTY SECOND RULE</h3>
                        </div>
                    </Responsive>
                    <div className="ui container grid stackable">
                        <div className="sixteen wide column eight wide computer column">
                            <p>
                                The twenty-second rule is a principle meant to help you create new habits by making the
                                task use less willpower. For example, it is much easier to sit down on your computer and
                                watch Netflix than go over to the piano and start practicing or go over to your backpack
                                and pull out your book. The idea put simply is that you need to make it take less effort
                                to do what you want or make it take more to do what you don’t. Make a point of leaving
                                your book on the bedside table or try to make it easier to reach the piano (which might
                                be a little complicated) but in short, the idea is that if it takes more than 20 seconds
                                to start on a new task the odds are that in five days you won’t be doing it.
                            </p>
                        </div>
                        <div className="seven wide column">
                            <Responsive minWidth={768}>
                                <Image src="https://images.unsplash.com/photo-1597661905942-8d50e4ab6fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" />
                            </Responsive>
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
export default TwentySecond;
