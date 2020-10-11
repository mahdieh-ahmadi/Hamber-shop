import React from 'react';
import './bergerindex.css'

const Bergureindex = (props) => {
    let bergureclass = null;

    switch(props.type){
        case('bread-bottom'):
            bergureclass = <div className='bread-bottom'></div>
        break
        case('bread-top'):
            bergureclass = (<div className='bread-top'>
                <div className='slicce1'></div>
                <div className='slicce2'></div>
            </div>)
        break
        case('meat'):
            bergureclass=<div className='meat'></div>;
        break
        case('chees'):
            bergureclass=<div className='chees'></div>;
        break
        case('salad'):
            bergureclass=<div className='salad'></div>;
        break
        case('bakon'):
            bergureclass=<div className='bakon'></div>;
        break
        default:
             bergureclass = null;
    }
    return (bergureclass)
}

export default Bergureindex;