import React from 'react';
import { List, Responsive } from 'semantic-ui-react';
let span = <span></span>;
class HappinessAdvantage extends React.Component {
    render() {
        return (
            <div>
                <Responsive minWidth={768}>
                    <h3>THE HAPPINESS ADVANTAGE</h3>
                </Responsive>
                <Responsive maxWidth={768}>
                    <div className="header">
                        <h3>THE HAPPINESS ADVANTAGE</h3>
                    </div>
                </Responsive>

                <div className="ui grid container stackable">
                    <div className="nine wide computer sixteen wide column">
                        <p>
                            The Happiness advantage is the idea that with a positive mindset you will perform better
                            than with a neutral or negative one. Not only will it increase your performance in the
                            workplace but research shows that unhappy employees will take on average about two more
                            weeks of sick leave than the average employee.
                            <Responsive className="inline" minWidth={992}>
                                Not to mention that the hormones released by positive emotions greatly increase brain
                                function.
                            </Responsive>
                            Even if you are not positive by default it does not take much, even the smallest shots of
                            positivity can give you a competitive edge.
                            <Responsive className="inline" minWidth={992}>
                                For example in a study doctors were asked to diagnose hypothetical patients doctors that
                                were primed to be positive were twice as fast at reaching the correct diagnosis. Most
                                surprisingly is all it took was the promise of a piece of candy.
                            </Responsive>
                            So the next time you are in a stressful situation just remember that even the smallest
                            things that make you smile can make all the difference.
                        </p>
                    </div>
                    <div className="six wide column computer only">
                        <List relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header as="li">Meditation</List.Header>
                                    <List.Description as="li">
                                        Research shows that meditation regular meditation can permanently rewire the
                                        brain to raise levels of happiness, lower stress and improve immune function.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as="li">Look Forward To Something</List.Header>
                                    <List.Description as="li">
                                        Whenever you need a boost of happiness remember that the anticipation of future
                                        rewards lights up the pleasure centers of the brain almost as much as the actual
                                        reward.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as="li">Commit Conscious Acts of Kindness</List.Header>
                                    <List.Description as="li">
                                        Numerous studies have shown that acts of altruism decrease stress and strongly
                                        contribute to better mental health.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as="li">Exercise</List.Header>
                                    <List.Description as="li">
                                        Exercise releases pleasure inducing endorphins, boosts our mood and enhances our
                                        work performance in a number of ways such as improving motivation and reducing
                                        stress.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}
export default HappinessAdvantage;
