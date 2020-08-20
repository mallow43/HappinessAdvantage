import React from 'react';
import { Responsive, Image } from 'semantic-ui-react';
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
                    <div className="ui container grid stackable">
                        <div className="seven wide column">
                            <Responsive minWidth={768}>
                                <Image src="https://images.unsplash.com/photo-1597434002293-fc9bb06371d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" />
                            </Responsive>
                        </div>
                        <div className="sixteen wide column eight wide computer column">
                            <p>
                                Studies have shown that if you think of adversity as an opportunity for growth, you are
                                more likely to experience that growth. As a result, this principle consists of trying to
                                scan for opportunities within adversity and thus progress because of setbacks instead of
                                regressing or recovering to the same level. Think not about how bad the cards you have
                                been dealt are but how you can use them to advance. Problems no matter how bad usually
                                don’t hit us as hard as we think they will so it is important to maintain a positive
                                explanatory style it is our reaction to our problem that matters just as much as the
                                problem itself so it is incredibly important to avoid hopelessness.
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
export default FallingUp;
