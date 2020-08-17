import React from 'react';
import { Responsive } from 'semantic-ui-react';
class FallingUp extends React.Component {
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
                <h3>Falling Up</h3>
                <p>
                    Laborum mollit id fugiat dolor incididunt excepteur esse reprehenderit nulla enim consequat. Magna
                    incididunt enim enim nulla aliqua proident minim est consectetur laborum mollit minim. Veniam sint
                    in elit excepteur aute adipisicing proident nulla sint aliquip Lorem et proident.
                </p>
            </div>
        );
    }
}
export default FallingUp;
