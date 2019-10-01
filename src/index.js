import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import Game from './components/Game';



class App extends Component {
    render() {
        return (
            <div className='bg-gray-100 h-screen mx-auto'>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));