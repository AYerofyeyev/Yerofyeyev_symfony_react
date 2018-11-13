import React, { Component } from "react";
import LatestWork from "../presentational/LatestWork";

class LatestworksContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <main>
                <section className="latest">
                    <div className="wrapper">
                        <h1>Latest works</h1>
                        <div className="content">
                            <LatestWork key={0} style={'scrumi'} title={'Abcdef'} description={'Abcd Efgh ijk lmno'} link={'http://www.i.ua'}/>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default LatestworksContainer;
