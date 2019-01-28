import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';

class App extends Component {
    render() {
        return(
            <Fragment>
                <Header/>
             </Fragment>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#web-page')
);