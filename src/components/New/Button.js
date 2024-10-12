import React from 'react';
import './comp_styles.css';

const Button = (props) =>{
    
    return(
      <div   className={`button_container `} style={{...props.style}}>
          <input
          type="button" 
          onClick={props.onClick} 
          
          id={props.id || ''} 
          value={props.value || ''} 
          className="button_style"
          style={{...props.inputStyle}} />
      </div>
    )
}

export default Button;