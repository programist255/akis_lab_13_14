import React from 'react';
//import './CFooter.css';

// function CFooter(){
//     let data = new Date();
//     return (
//         <div>
//             <h4> AKiS, prz serwer react. Data: {data.toString()}</h4>
//         </div>
//     )
// }
//export default CFooter;

// export const CFooter = () => {
//     let data = new Date();
//     return (
//         <div>
//             <h4> AKiS, prz serwer react. Data: {} 
//                 {data.toLocaleDateString('pl-PL')}
//                 {" "}</h4>
//         </div>
//     );
// }

// export const CFooter = () => {
//     let data = new Date();
//     return React.createElement('div', null, 
//     'AKiS, prz serwer react.  Data: '+data.toLocaleDateString('pl-PL'))
// }

// export const CFooter = () => {
//     let data = new Date();
//     return React.createElement('div', null, 
//         React.createElement('h5', null,
//             'AKiS, prz serwer react.  Data: '
//             +data.toLocaleDateString('pl-PL'))
//     )
// }

// export const CFooter = () => {
//     let data = new Date();
//     return React.createElement('div', {className:'footerDivClass'}, 
//         React.createElement('h5', {id:'footerText', className:'footerTextClass'},
//             'AKiS, prz serwer react.  Data: '
//             +data.toLocaleDateString('pl-PL'))
//     )
// }

export const CFooter = (props) => {
    let data = new Date();
    return (
        <div>
            <h4> AKiS, prz serwer react. Data:
                {data.toLocaleDateString('pl-PL')}
                <br/>
                Stan pogody: {props.weather}, temperatura: {props.temp}</h4>
        </div>
    );
}