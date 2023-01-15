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

const CFooter = () => {
    let data = new Date();
    return (
        <div>
            <h4> AKiS, prz serwer react. Data: {} 
                {data.toString()}
                {" "}</h4>
        </div>
    );
}
