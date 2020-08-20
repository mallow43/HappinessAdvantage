import React from 'react';
import { Responsive, Image } from 'semantic-ui-react';

class SocialInvestment extends React.Component {
    render() {
        return (
            <div id="tall">
                <div className="ui container">
                    <Responsive minWidth={768}>
                        <h3>SOCIAL INVESTMENT</h3>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <div className="header">
                            <h3>SOCIAL INVESTMENT</h3>
                        </div>
                    </Responsive>
                    <div className="ui container grid stackable">
                        <div className="sixteen wide column eight wide computer column">
                            <p>
                                The seventh principle Social Investment is about the importance of having social
                                support. Multiple studies have shown that friendship was what had motivated a group of
                                highly successful professionals and that it had far more than individual status or
                                financial gain. Having social connections is not just good for morale but also releases
                                hormones that can boost your immune system. In fact, having social connections is so
                                important that a lack of social support can harm well-functioning adults and has been
                                shown to add thirty points to their blood pressure reading. In conclusion, relationships
                                are the greatest predictor of happiness and well being so remember when in a crisis
                                don’t turn inwards turn instead turn to your group of social support.
                            </p>
                        </div>
                        <div className="seven wide column">
                            <Responsive minWidth={768}>
                                <Image src="https://images.unsplash.com/photo-1597688615012-dec104005e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
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
export default SocialInvestment;
