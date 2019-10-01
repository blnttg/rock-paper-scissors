import React, { Component } from 'react';


// class Option extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {

//     }

//     render() {
//         return (
//             <span
//                 className='text-2xl font-bold tracking-wide text-gray-500 hover:text-gray-700 cursor-pointer m-2'
//                 onClick={this.props}
//             >
//                 {this.props.name}
//             </span>
//         )
//     }
// }

const Option = props => {
    return (
        <span
            className='text-2xl font-bold tracking-wide text-gray-500 hover:text-gray-700 cursor-pointer m-2'
            onClick={props.onClick}
        >
            {props.name}
        </span>
    );
}

// const Options = props => {
//     return (
//         <div className='flex flex-col items-center justify-center h-screen p-4'>
//             <Option name='rock' onClick={props.onClick('rock')} />
//             <Option name='paper' onClick={props.onClick('paper')} />
//             <Option name='scissors' onClick={props.onClick('scissors')} />
//         </div>
//     );
// }

export default Option;