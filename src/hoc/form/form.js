import React from 'react'

const form = (props) => {
    let input = <input {...props.config} onChange={props.chaned}/>
   
    switch(props.inputtype){
        case('input'):
        input = <input {...props.config} onChange={props.chaned}/>;
        break;
        case('txtarea'):
        input = <textarea {...props.config} onChange={props.chaned}/>;
        break;
        case('select'):
        input=<select onChange={props.chaned}>
           {props.config.option.map(p => {return(
               <option key={p}> {p} </option>
           )}  
           )}
        </select>;
        break;
        default:
        input = <input {...props.config} onChange={props.chaned}/>
    }
    return(
        <div>
            {input}
        </div>)
}

export default form