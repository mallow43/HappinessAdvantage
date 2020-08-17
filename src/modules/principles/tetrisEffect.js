import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';
class TetrisEffect extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Responsive minWidth={768}>
                        <h3>THE TETRIS EFFECT</h3>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <div className="header">
                            <h3>THE TETRIS EFFECT</h3>
                        </div>
                    </Responsive>
                </div>
                <div className="ui container grid stackable">
                    <div className="eight wide column">
                        <p>
                            The Tetris Effect is the idea that you tend to miss what you are not looking for and
                            therefore must try to focus on the positive aspects of your life so that you can reap the
                            benefits of happiness that we discussed in the previous sections. One of the best ways to do
                            this is to every day make a list of three things that you are grateful for, which is why I
                            have created
                            <a href="https://gratitude-li.netlify.app/"> this</a> tool to help with that.
                        </p>
                    </div>
                    <div className="seven wide column">
                        <Image src="https://images.unsplash.com/photo-1597601916107-8aa59e09424b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" />
                    </div>
                </div>
            </div>
        );
    }
}
export default TetrisEffect;
