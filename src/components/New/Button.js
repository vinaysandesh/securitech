import React from 'react';
import './comp_styles.css';

const Button = (props) =>{
    
    return(
      <div   className={`button_container `}>
          <input
          type="button" 
          onClick={props.onClick} 
          
          id={props.id || ''} 
          value={props.value || ''} 
          className="button_style" />
      </div>
    )
}

export default Button;