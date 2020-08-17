import React from 'react';
import { Button, Icon, Transition, Responsive } from 'semantic-ui-react';
import HappinessAdvantage from './principles/happinessAdvantage';
import TetrisEffect from './principles/tetrisEffect';
import Fulcrum from './principles/fulcrum';
import FallingUp from './principles/fallingUp';
import ZorroCircle from './principles/zorroCircle';
import TwentySecond from './principles/20Second';
import SocialInvestment from './principles/socialInvestment';

const principles = [
    <HappinessAdvantage key="first" />,
    <Fulcrum key="second" />,
    <TetrisEffect key="third" />,
    <FallingUp key="fourth" />,
    <ZorroCircle key="fifth" />,
    <TwentySecond key="sixth" />,
    <SocialInvestment key="seventh" />,
];
// Import Swiper styles
class SevenPrinciples extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0,
        };
        this.forward = this.forward.bind(this);
        this.backwards = this.backwards.bind(this);
    }
    forward() {
        if (this.state.num === 6) {
            this.setState({ num: 0 });
        } else {
            this.setState({ num: this.state.num + 1 });
        }
    }
    backwards() {
        if (this.state.num === 0) {
            this.setState({ num: 6 });
        } else {
            this.setState({ num: this.state.num - 1 });
        }
    }
    render() {
        return (
            <div>
                <Responsive minWidth={768}>
                    <div className="header">
                        <h3 id="sevenHeader">THE SEVEN PRINCIPLES</h3>
                    </div>
                </Responsive>

                <div id="slides">
                    <Button icon id="forwards" onClick={this.backwards}>
                        <Icon name="arrow left" />
                    </Button>
                    <Button icon id="backwards" onClick={this.forward}>
                        <Icon name="arrow right" />
                    </Button>
                    <div id="content">
                        <Responsive minWidth={768}>
                            {/* <div className="ui container">{principles[this.state.num]}</div> */}
                        </Responsive>
                        {/* <Responsive maxWidth={768}> */}
                        {principles[this.state.num]}
                        {/* </Responsive> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SevenPrinciples;
