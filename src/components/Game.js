import React, { Component } from 'react';
import Option from './Option';


const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const DRAW = 'Tie!!';
const WIN = 'You won! :)';
const LOST = 'CPU won! :/';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            randomOption: null,
            lastResult: null,
            cpu: 0,
            player: 0,
            draw: 0,
            // stats 
            screenChange: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidUpdate() {
    //     switch (this.state.selectedOption) {
    //         case 'rock':
    //             this.compare('rock');
    //             break;
    //         case 'paper':
    //             this.compare('paper');
    //             break;
    //         case 'scissors':
    //             this.compare('scissors');
    //             break;
    //         default:
    //             console.log('no option selected')
    //             break;
    //     }

    //     console.log(this.state.selectedOption);

    //     // if (this.state.selectedOption !== null) {
    //     //     continue;
    //     // }
    // }

    handleClick(option) {
        console.log(option);
        this.setState({
            selectedOption: option
        });
        this.compare(option);
    }

    async compare(userOption) {
        var options = ['rock', 'paper', 'scissors'];
        await this.setState({
            randomOption: options[Math.floor(Math.random() * options.length)]
        });

        if (userOption === ROCK) {
            switch (this.state.randomOption) {
                case ROCK:
                    await this.setState({
                        draw: this.state.draw + 1,
                        lastResult: DRAW
                    });
                    break;
                case PAPER:
                    await this.setState({
                        cpu: this.state.cpu + 1,
                        lastResult: LOST
                    });
                    break;
                case SCISSORS:
                    await this.setState({
                        player: this.state.player + 1,
                        lastResult: WIN
                    });
                    break;
                default:
                    break;
            }
        }
        else if (userOption === PAPER) {
            switch (this.state.randomOption) {
                case ROCK:
                    await this.setState({
                        player: this.state.player + 1,
                        lastResult: WIN
                    });
                    break;
                case PAPER:
                    await this.setState({
                        draw: this.state.draw + 1,
                        lastResult: DRAW
                    });
                    break;
                case SCISSORS:
                    await this.setState({
                        cpu: this.state.cpu + 1,
                        lastResult: LOST
                    });
                    break;
                default:
                    break;
            }
        }
        else if (userOption === SCISSORS) {
            switch (this.state.randomOption) {
                case ROCK:
                    await this.setState({
                        cpu: this.state.cpu + 1,
                        lastResult: LOST
                    });
                    break;
                case PAPER:
                    await this.setState({
                        player: this.state.player + 1,
                        lastResult: WIN
                    });
                    break;
                case SCISSORS:
                    await this.setState({
                        draw: this.state.draw + 1,
                        lastResult: DRAW
                    });
                    break;
                default:
                    break;
            }
        }
        this.changeScreen();

        const playerOption = document.getElementById('playerOption');
        const cpuOption = document.getElementById('cpuOption');

        const WIN_ANIMATION = ['animated', 'tada', 'slow'];
        const LOST_ANIMATION = ['animated', 'shae', 'slow'];
        const DRAW_ANIMATION = ['animated', 'jello', 'slower', ];

        if (this.state.lastResult === WIN) {
            playerOption.classList.add(...WIN_ANIMATION);
            cpuOption.classList.add(...LOST_ANIMATION);
        }
        else if (this.state.lastResult === LOST) {
            playerOption.classList.add(...LOST_ANIMATION);
            cpuOption.classList.add(...WIN_ANIMATION);
        }
        else {
            playerOption.classList.add(...DRAW_ANIMATION);
            cpuOption.classList.add(...DRAW_ANIMATION);
        }
    }

    async changeScreen() {
        await this.setState({ screenChange: !this.state.screenChange });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div className='bg-gray-100 mx-auto h-full'>
                <div className='fixed top-0 left-0 right-0 flex items-end justify-between sm:w-1/2 px-2 sm:p-0 mx-auto animated slideInDown faster'>
                    <h1 className='text-2xl font-bold tracking-tighter text-gray-800' >rock, paper, scissors</h1>
                    <div className='flex items-center'>
                        <div className='flex flex-col text-center px-3'>
                            <span className='font-bold text-xs text-gray-600'>you </span>
                            <span className='font-bold text-2xl text-gray-800'>{this.state.player}</span>
                        </div>
                        <div className='flex flex-col text-center px-3'>
                            <span className='font-bold text-xs text-gray-600'>cpu </span>
                            <span className='font-bold text-2xl text-gray-800'>{this.state.cpu}</span>
                        </div>
                        <div className='flex flex-col text-center px-3'>
                            <span className='font-bold text-xs text-gray-400'>tie </span>
                            <span className='font-bold text-2xl text-gray-600'>{this.state.draw}</span>
                        </div>
                    </div>
                </div>
                {!this.state.screenChange && <div id='option-select' className='animated fadeIn flex flex-col items-center justify-center h-full p-4'>
                    <Option name='rock' onClick={() => this.handleClick(ROCK)} />
                    <Option name='paper' onClick={() => this.handleClick(PAPER)} />
                    <Option name='scissors' onClick={() => this.handleClick(SCISSORS)} />
                </div>}
                {this.state.screenChange && <div id='game-results' hidden className='animated fadeIn faster flex flex-col items-center justify-center h-full p-4'>
                    <h2 className='inline-block text-xl font-bold tracking-tight bg-gray-400 px-3 py-2 text-gray-100 animated delay-1s zoomIn faster text-center'>{this.state.lastResult}</h2>
                    <div className='flex justifiy-between'>
                        <div className='flex flex-col p-4'>
                            <span id='playerOption' className='text-4xl font-bold tracking-wide text-gray-700'>
                                {this.state.selectedOption}
                            </span>
                            <span className='text-xs font-semibold tracking-tight text-gray-500'>
                                you
                            </span>
                        </div>
                        <div className='flex flex-col p-4'>
                            <span id='cpuOption' className='text-4xl font-bold tracking-wide text-gray-700'>
                                {this.state.randomOption}
                            </span>
                            <span className='text-xs text-right font-semibold tracking-tight text-gray-500'>
                                cpu
                            </span>
                        </div>
                    </div>
                    <button onClick={this.changeScreen.bind(this)} className='block mt-16 text-xl font-bold tracking-wide text-gray-500 hover:text-gray-700 cursor-pointer m-2 animated fadeIn slow delay-1s'>new game</button>
                </div>}
                {/* { document.getElementById('game-results').style.visibility = 'hidden' } */}
            </div>
        )
    }
}
