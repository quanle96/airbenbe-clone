import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './component/navbar'
class Home extends React.Component {

    render(){
        return (
            <div>
                <Navbar/>
            </div>
        );
    };
}

ReactDOM.render(<Home />, document.getElementById("root"));