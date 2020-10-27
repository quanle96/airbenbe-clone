import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {

    render(){
        return (
            <div>Wellcome</div>
        );
    };
}

ReactDOM.render(<Home />, document.getElementById("root"));