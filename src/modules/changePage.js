import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';

class ChangePage extends React.Component {
    render() {
        return (
            <div className="section" id="section1">
                <Responsive maxWidth={768}>
                    <div className="header">
                        <h4>CHANGE IS POSSIBLE</h4>
                    </div>
                </Responsive>
                <div className="ui container main">
                    <Responsive minWidth={768}>
                        <h4>CHANGE IS POSSIBLE</h4>
                    </Responsive>
                    <div className="ui grid stackable">
                        <div className="ten wide column">
                            <p>
                                The first and most important thing to realize when trying to implement the seven
                                principles that you will be introduced to in this book is that change is that lasting
                                positive change is possible. Growth in the brain has been observed in response to all
                                kinds of circumstances from blindness to even your occupation.
                            </p>
                        </div>
                        <div className="six wide column">
                            <Image
                                id="image"
                                src="https://images.unsplash.com/photo-1596468138838-0f34c2d0773b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            />
                        </div>
                    </div>
                </div>
                <Responsive minWidth={768}>
                    <div className="footer">
                        <h5>
                            Happiness is not the belief that we dont need to change; it is the realization that we can.
                        </h5>
                    </div>
                </Responsive>
            </div>
        );
    }
}
export default ChangePage;
