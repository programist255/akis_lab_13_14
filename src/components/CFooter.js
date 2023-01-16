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

export const CFooter = () => {
    let data = new Date();
    return (
        <div>
            <h4> AKiS, prz serwer react. Data: {} 
                {data.toLocaleDateString('pl-PL')}
                {" "}</h4>
        </div>
    );
}

