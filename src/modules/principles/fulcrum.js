import React from 'react';
import { Image } from 'semantic-ui-react';

class FUlcrum extends React.Component {
    render() {
        return (
            <div>
                <h3>THE FULCRUM AND THE LEVER</h3>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <p>
                            We can’t change reality but we can use our brain to change how we process it. What we
                            believe is happening is oftentimes just as powerful as what is actually happening as was
                            observed by multiple studies in which peoples symptoms were made disappear with sugar pills.
                            Now for most people being tricked into taking sugar pills to cure an illness is rather
                            impractical. What I believe is a more interesting finding is that after being primed to
                            think of their work as exercise by telling them how many calories they were burning while
                            working as a maid at a hotel had actually lost weight while the rest of the maids had not.
                            And just as our view of work affects our real experience of it, so does our view of our own
                            abilities Asian women performed better on math tests when reminded of the asian stereotypes
                            than the women stereotypes. Once we realize how much our reality depends on how we view it
                            it comes as less of a surprise that our external circumstances only predict 10% of our
                            happiness.
                        </p>
                    </div>
                    <div className="four wide column">
                        <Image
                            id="fulcrumIMG"
                            src="https://images.unsplash.com/photo-1594972654725-74db7518482b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default FUlcrum;
